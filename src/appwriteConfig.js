import {Client,Account,Databases} from 'appwrite'
const client =new Client()
client
    .setEndpoint("https://fra.cloud.appwrite.io/v1") // Your API Endpoint
    .setProject("698a16e900393a892b4c")      // Your project ID

export const account = new Account(client);
export const databases= new Databases(client);
export default client;