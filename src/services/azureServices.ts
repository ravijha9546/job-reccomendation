import { TextAnalyticsClient, AzureKeyCredential } from "@azure/ai-text-analytics";
import { BlobServiceClient } from "@azure/storage-blob";
import { DocumentAnalysisClient } from "@azure/ai-form-recognizer";

// TODO: Replace with your actual Azure credentials
const textAnalyticsKey = "your_text_analytics_key";
const textAnalyticsEndpoint = "your_text_analytics_endpoint";
const storageConnectionString = "your_storage_connection_string";
const formRecognizerKey = "your_form_recognizer_key";
const formRecognizerEndpoint = "your_form_recognizer_endpoint";

// Text Analytics Client
const textAnalyticsClient = new TextAnalyticsClient(textAnalyticsEndpoint, new AzureKeyCredential(textAnalyticsKey));

// Blob Storage Client
const blobServiceClient = BlobServiceClient.fromConnectionString(storageConnectionString);

// Form Recognizer Client
const formRecognizerClient = new DocumentAnalysisClient(formRecognizerEndpoint, new AzureKeyCredential(formRecognizerKey));

export const analyzeJobDescription = async (jobDescription: string) => {
  const result = await textAnalyticsClient.extractKeyPhrases([jobDescription]);
  return result[0].keyPhrases;
};

export const uploadResume = async (file: File, containerName: string) => {
  const containerClient = blobServiceClient.getContainerClient(containerName);
  const blobClient = containerClient.getBlockBlobClient(file.name);
  await blobClient.uploadData(file);
  return blobClient.url;
};

export const analyzeResume = async (resumeUrl: string) => {
  const poller = await formRecognizerClient.beginAnalyzeDocumentFromUrl("prebuilt-document", resumeUrl);
  const result = await poller.pollUntilDone();
  return result;
};

// Add more Azure service functions as needed

export default {
  analyzeJobDescription,
  uploadResume,
  analyzeResume,
};