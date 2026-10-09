#!/usr/bin/env bash
# Build the static export and sync it to an S3 bucket configured for static website hosting.
#
# Usage:
#   BUCKET=johnfonseca-portfolio REGION=us-east-1 ./scripts/deploy-s3.sh
#
# One-time bucket setup (run once, not part of this script):
#   aws s3 mb s3://$BUCKET --region $REGION
#   aws s3 website s3://$BUCKET --index-document index.html --error-document 404.html
#   aws s3api put-public-access-block --bucket $BUCKET --public-access-block-configuration \
#     BlockPublicAcls=false,IgnorePublicAcls=false,BlockPublicPolicy=false,RestrictPublicBuckets=false
#   aws s3api put-bucket-policy --bucket $BUCKET --policy "$(cat <<POLICY
#   {
#     "Version": "2012-10-17",
#     "Statement": [{
#       "Sid": "PublicReadGetObject",
#       "Effect": "Allow",
#       "Principal": "*",
#       "Action": "s3:GetObject",
#       "Resource": "arn:aws:s3:::$BUCKET/*"
#     }]
#   }
#   POLICY
#   )"

set -euo pipefail

: "${BUCKET:?Set BUCKET=your-bucket-name}"
: "${REGION:=us-east-1}"

cd "$(dirname "$0")/.."

echo "Building static export..."
npm run build

echo "Syncing out/ to s3://$BUCKET ..."
aws s3 sync out/ "s3://$BUCKET" --region "$REGION" --delete

echo "Done. Site URL: http://$BUCKET.s3-website-$REGION.amazonaws.com"
