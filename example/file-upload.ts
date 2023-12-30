import "dotenv/config";
import { Midjourney } from "../src";
import { promises as fs } from 'fs';
/**
 *
 * a simple example of using the info api
 * ```
 * npx tsx example/info.ts
 * ```
 */
async function main() {
  const client = new Midjourney({
    ServerId: <string>process.env.SERVER_ID,
    ChannelId: <string>process.env.CHANNEL_ID,
    SalaiToken: <string>process.env.SALAI_TOKEN,
    Debug: true,
    Ws: true,
  });
  await client.Connect();
  const base64Image = await imageToBase64("./res/test2.png")
  // console.log(base64Image)
  const DcImage = await client.UploadImageByBase64(base64Image)
  console.log(DcImage)
  // await client.DescribeByDbImage(DcImage)

  /*
  *
  *   filename: '1190784532282867712.png',
  upload_filename: 'e0f76388-3d27-4e6b-b499-8b249ab1e3e2/1190784532282867712.png'

  * */

/*
* ,"url":"https://cdn.discordapp.com/ephemeral-attachments/1092492867185950852/1190783418653483129/1190783411728416768.png?ex=65a30e7a&is=6590997a&hm=7a0bf43b631cbd1a3d82c671413d0786c0f8a10c370bcf3614edfde538a4a774&","proxy_url":"https://media.discordapp.net/ephemeral-attachments/1092492867185950852/1190783418653483129/1190783411728416768.png?ex=65a30e7a&is=6590997a&hm=7a0bf43b631cbd1a3d82c671413d0786c0f8a10c370bcf3614edfde538a4a774&"
*
* */
  client.Close();
}

async function imageToBase64(path: string): Promise<string> {
  // read binary data
  const image = await fs.readFile(path);
  // convert binary data to base64 encoded string
  return image.toString('base64');
}

main()
  .then(() => {
    console.log("finished");
    process.exit(0);
  })
  .catch((err) => {
    console.log("finished");
    console.error(err);
    process.exit(1);
  });
