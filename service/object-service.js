const AWS = require('aws-sdk');
const uuid = require('uuid');

module.exports = class ObjectService{
     
    constructor(config) {

        // update the client config
        AWS.config.update({
            region: config.storageRegion,
            credentials: new AWS.Credentials(config.accessToken, config.secretKey),
            s3ForcePathStyle: true,
        });
        // set the Object Storage endpoint
        AWS.config.s3 = { endpoint: `${config.storageUrl}` };

        this.s3 = new AWS.S3({
            params: { Bucket: config.storageBucket }
        });
    }

    upload(object, mime) {
        // best to use a unique identifier for key name to avoid name conflicts
        return this.s3.upload({
            Key: uuid(),
            Body: object,
            ContentType: mime,
        }).promise();
    }

}