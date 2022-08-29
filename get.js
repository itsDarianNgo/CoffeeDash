import { DoorDashClient } from "@doordash/sdk";
import "dotenv/config"

const client = new DoorDashClient({
    developer_id: process.env.DEVELOPER_ID,
    key_id: process.env.KEY_ID,
    signing_secret: process.env.SIGNING_SECRET,
});

const response = client
  .getDelivery("ec944aa3-ea1d-4769-85ff-df0060af8324")
  .then(response => {
    console.log(response.data)
  })
  .catch(err => {
    console.log(err)
  })

  console.log(response);