import "dotenv/config";
import { Midjourney } from "../src";
/**
 *
 * a simple example of how to use the imagine command
 * ```
 * npx tsx example/imagine.ts
 * ```
 */
async function main() {
  const client = new Midjourney({
    ServerId: <string>process.env.SERVER_ID,
    ChannelId: <string>process.env.CHANNEL_ID,
    SalaiToken: <string>process.env.SALAI_TOKEN,
    Debug: true,
    Ws: false,
  });

  // const msg = await client.Imagine(
  //   "Red hamster",
  //   (uri: string, progress: string) => {
  //     console.log("loading", uri, "progress", progress);
  //   }
  // );

  const c= await client.SwapId("kevin", "https://media.discordapp.net/attachments/1145337867984449646/1185197127631114241/medeya_honey_Png_of_businessman_2cdf8f4f-dd1a-4654-8cca-58c434fcdfad.png")

  //1185260365727141949
  // console.log("Imagine Id:", msg.id);
  // console.log(JSON.stringify(msg));
}
main().catch((err) => {
  console.error(err);
  process.exit(1);
});
