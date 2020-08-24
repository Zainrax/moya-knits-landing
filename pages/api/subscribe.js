import mailchimp from "@mailchimp/mailchimp_marketing";

export default async (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ error: "Email is required" });
  }

  try {
    const LIST_ID = process.env.MAILCHIMP_LIST_ID;
    const API_KEY = process.env.MAILCHIMP_API_KEY;
    const DATACENTER = "us10";
    const data = {
      email_address: email,
      status: "subscribed",
    };

    mailchimp.setConfig({
      apiKey: API_KEY,
      server: DATACENTER,
    });

    const response = await mailchimp.lists.addListMember(LIST_ID, data);
    if (response.status >= 400) {
      return res.status(400).json({
        error: `There was an error subscribing to the newsletter. Send us an email and we will add you to the list.`,
      });
    }

    return res.status(201).json({ message: response });
  } catch (error) {
    return res.status(500).json({ error: error.message || error.toString() });
  }
};
