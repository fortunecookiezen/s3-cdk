import cdk = require('@aws-cdk/cdk');
import s3 = require('@aws-cdk/aws-s3')
import { CfnBucket } from '@aws-cdk/aws-s3';

export class S3CdkStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // The code that defines your stack goes here
    const logbucket = new s3.Bucket(this, 'LogBucket', {
      blockPublicAccess: s3.BlockPublicAccess.BlockAll,
      encryption: s3.BucketEncryption.S3Managed
    });
    let cfnLogBucket = logbucket.node.findChild('Resource') as CfnBucket
    cfnLogBucket.addPropertyOverride("Access Control", "LogDeliveryWrite");
    // add tags
    logbucket.node.applyAspect(new cdk.Tag('Owner', 'phillips.james@gmail.com'));
  }
}
