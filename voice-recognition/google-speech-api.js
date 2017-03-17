
// NOTE: JSON request file saved as 'sync-request.json'
{
  'config': {
      'encoding':'FLAC',
      'sampleRate': 16000,
      'languageCode': 'en-US'
  },
  'audio': {
      'uri':'gs://cloud-samples-tests/speech/brooklyn.flac'
  }
}
// NOTE: Authenticate to your service account
// gcloud auth activate-service-account --key-file=service-account-key-file
// gcloud auth print-access-token access_token
// NOTE: Use curl to make a speech:syncrecognize request
curl -s -k -H "Content-Type: application/json" \
    -H "Authorization: Bearer access_token" \
    https://speech.googleapis.com/v1beta1/speech:syncrecognize \
    -d @sync-request.json
