var AWS = require('aws-sdk')

AWS.config.loadFromPath('static/secrets.json')

// Create EC2 service object
var ec2 = new AWS.EC2({apiVersion: '2016-11-15'});

var params = {
    InstanceCount: 1,
    SpotPrice: '0.75',
    LaunchSpecification: {
        BlockDeviceMappings: [
            {
                DeviceName: '/dev/xvdba',
                Ebs: {
                    DeleteOnTermination: true,
                    SnapshotId: 'snap-011bc0d70c8c2e239',
                    VolumeSize: 100,
                    VolumeType: 'gp2'
                }
            }
        ],
        SecurityGroupIds: ['sg-5bd52528'],
        ImageId: 'ami-12fae169', // Witcher 3 setup
        InstanceType: 'g2.2xlarge'
    }
};


export default {
    spot() {
        ec2.requestSpotInstances(params, function(err, data) {
            if (err) {
                console.log("Could not create instance", err);
                return;
            }
            
        });
    }
}
