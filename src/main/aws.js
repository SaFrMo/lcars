var AWS = require('aws-sdk')

AWS.config.loadFromPath('static/secrets.json')

// Create EC2 service object
var ec2 = new AWS.EC2({apiVersion: '2016-11-15'});

var params = {
    SpotFleetRequestConfig:
{    "IamFleetRole": "arn:aws:iam::312517806012:role/aws-ec2-spot-fleet-tagging-role",
    "AllocationStrategy": "lowestPrice",
    "TargetCapacity": 1,
    "SpotPrice": "0.767",
    "ValidFrom": "2017-10-03T01:10:47Z",
    "ValidUntil": "2018-10-03T01:10:47Z",
    "TerminateInstancesWithExpiration": true,
    "LaunchSpecifications": [
        {
            "ImageId": "ami-12fae169",
            "InstanceType": "g2.2xlarge",
            "KeyName": "Third Time's The Charm",
            "SpotPrice": "0.767",
            "BlockDeviceMappings": [
                {
                    "DeviceName": "/dev/sda1",
                    "Ebs": {
                        "DeleteOnTermination": true,
                        "VolumeType": "gp2",
                        "VolumeSize": 35,
                        "SnapshotId": "snap-00b23d52f31b52b21"
                    }
                },
                {
                    "DeviceName": "/dev/xvdba",
                    "Ebs": {
                        "DeleteOnTermination": true,
                        "VolumeType": "gp2",
                        "VolumeSize": 100,
                        "SnapshotId": "snap-011bc0d70c8c2e239"
                    }
                }
            ],
            "SecurityGroups": [
                {
                    "GroupId": "sg-5bd52528"
                }
            ]
        }
    ]
}};


export default {
    spot() {
        ec2.requestSpotFleet(params, function(err, data) {
            if (err) {
                console.log("Could not create instance", err);
                return;
            }

        });
    }
}
