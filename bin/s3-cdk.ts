#!/usr/bin/env node
import 'source-map-support/register';
import cdk = require('@aws-cdk/cdk');
import { S3CdkStack } from '../lib/s3-cdk-stack';

const app = new cdk.App();
new S3CdkStack(app, 'S3CdkStack');
