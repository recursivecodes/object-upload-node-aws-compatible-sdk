# OCI Object Upload Example

## About

The purpose of this is to demonstrate object upload to OCI object storage via the Amazon S3 Node API.

## Prerequisites

* Create a *public* bucket in object storage (**do not store any sensitive/private/confidential objects in a public bucket!**).
* Create a user with necessary permissions and generate a [secret key](https://docs.cloud.oracle.com/iaas/Content/Identity/Tasks/managingcredentials.htm#Working2).

## Install
To install this project, run: `npm install`

## Configure
Update the values in `config/env-template.sh` for your environment, then source the file (`source config/env-template.sh`) in your console window to set the necessary environment variables required by the config file.

## Run
To Run: `npm start`.

## Test
Using a tool such as Postman, make a POST request to `http://localhost:3000/object/upload` like so (note the filename):

![POST request](https://objectstorage.us-phoenix-1.oraclecloud.com/n/toddrsharp/b/object-upload-demo-public/o/2019-05-22_11-55-54.jpg)

And you'll receive a result like so (note the URL in the `Location` key contains the path to your object):

![POST response](https://objectstorage.us-phoenix-1.oraclecloud.com/n/toddrsharp/b/object-upload-demo-public/o/2019-05-22_11-56-07.jpg)

Visit the URL to see your object!

![Stored object](https://toddrsharp.compat.objectstorage.us-phoenix-1.oraclecloud.com/object-upload-demo-public/87fb5fe6-0f0f-4a9f-b8c9-26f40a14bf93)

## Support/Questions

Contact Todd Sharp (todd.sharp@oracle.com).