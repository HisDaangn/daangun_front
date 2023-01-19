import { useState } from "react";
import AWS from 'aws-sdk';
import { Row, Col, Button, Input, Alert } from 'reactstrap';

function ImageUpload(url) {
    const [selectedFile, setSelectedFile] = useState(null);

    const ACCESS_KEY = 'AKIA3ZKVKUTIGQBPZ2CB';
    const SECRET_ACCESS_KEY = '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';
    const REGION = "ap-northeast-2";
    const S3_BUCKET = 'hisdaangn';

    AWS.config.update({
        accessKeyId: ACCESS_KEY,
        secretAccessKey: SECRET_ACCESS_KEY
    });

    const myBucket = new AWS.S3({
        params: { Bucket: S3_BUCKET },
        region: REGION,
    });

    const handleFileInput = (e) => {
        setSelectedFile(e.target.files[0]);
    }

    const uploadFile = (file) => {
        const params = {
            ACL: 'public-read',
            Body: file,
            Bucket: S3_BUCKET,
            Key: file.name
        };

        myBucket.putObject(params)
            .on('httpUploadProgress', (evt) => {
                setTimeout(() => {
                    setSelectedFile(null);
                }, 3000)
            })
            .send((err) => {
                if (err) console.log(err)
            })
    }
    return (
        <div>
            <div>
                <Row>
                    <Col>
                        <label htmlFor="ex_file">
                            <img style={{ maxWidth: "100px" }} src={url.url} alt="url" />
                            <br />
                        </label>

                        <Input style={{ display: "none" }} id="ex_file" color="primary" type="file" onChange={handleFileInput} />
                        {selectedFile ? (
                            <Button color="primary" onClick={() => uploadFile(selectedFile)}> Upload to S3</Button>
                        ) : null}
                    </Col>
                </Row>
            </div>
        </div>
    );
}
export default ImageUpload;