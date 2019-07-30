#/bin/bash
set -e

export STATIC_URL=https://test-repairs.anikalegal.com/static/
export SERVER=https://test-clerk.anikalegal.com
export S3_BUCKET_URL=s3://test-repairs.anikalegal.com
export SENTRY_JS_DSN=https://d562328a33ab4c1782706574e8a0bd92@sentry.io/1468089
export SENTRY_ENV=test
export GA_ID=

. ./scripts/build.sh
. ./scripts/deploy.sh