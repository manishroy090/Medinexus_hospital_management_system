
import fs from "fs";
import path from 'path';


export class FileUpload {

    static async uploadImage(fileName: any, buffer: any, uploadDir: any) {

        console.log("filename", fileName);
        console.log("buffer", buffer);
        console.log("uploadDir", uploadDir);


        if (!fs.existsSync(`uploads/${uploadDir}`)) {
            fs.mkdirSync(`uploads/${uploadDir}`, { recursive: true });

        }

        const dest = path.join(`uploads/${uploadDir}`, fileName);
        await fs.promises.writeFile(dest, buffer);

        return fileName;

    }


    static async StructureFileWithOtherData(request: any) {

        try {

            const fields: Record<string, any> = {};
            let fileInfo: any = null;
            const fileTitle = null;
            for await (const part of request.parts()) {
                if (part.file) {

                    const chunks: Buffer[] = [];

                    for await (const chunk of part.file) {
                        chunks.push(chunk);
                    }

                    fileInfo = {
                        filename: part.filename,
                        mimetype: part.mimetype,
                        buffer: Buffer.concat(chunks),
                    };

                } else {


                    if (part.fieldname == "sessions" || part.fieldname == "certifications" || part.fieldname == "awards" || part.fieldname == "educations") {

                        fields[part.fieldname] = JSON.parse(part.value);

                    }
                    else {

                        fields[part.fieldname] = part.value;
                    }
                }
            }



            const result: any = {
                fileInfo,
                ...fields
            };

            return result;

        } catch (error) {

            console.log("error", error)
            throw error

        }

    }

    //  static async upateImage(newImagName:String|null =null) {

    //     if(newImagName){

    //           //delete old image

    //         //create new image
    //         console.log("return new image");
    //     }
    //     else{

    //       console.log('return old image')

    //     }
    // //   console.log(oldImagName);

    // }

    static async upateImage(filenamePrefix: String, fileDestination: String, fileInfo: any, oldImage: String) {

        if (!fileInfo) {

            return oldImage;
        }
        else {

            console.log("oldImage",oldImage);

            //if old file exist then delete it first
            if (oldImage !==undefined && fs.existsSync(`uploads/${fileDestination}/${oldImage}`)) {
                console.log("delete condition hitted");
                fs.unlinkSync(`uploads/${fileDestination}/${oldImage}`)
            }

            const filename = `${filenamePrefix}-${Date.now()}-${fileInfo.filename}`;
            const uploadfilename = await this.uploadImage(filename, fileInfo.buffer, fileDestination);

            return uploadfilename;

        }

    }

    static async deleteImage(filenamePrefix: String, fileDestination: String, image: any) {

        console.log("image",image);
        if(image){
                fs.unlinkSync(`uploads/${fileDestination}/${image}`)
        }

        return;
    }


}