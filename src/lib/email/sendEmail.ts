import emailjs from "@emailjs/browser";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import localizedFormat from "dayjs/plugin/localizedFormat";

// Extend dayjs with necessary plugins
dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.extend(localizedFormat);

// Pre-import major locales
import "dayjs/locale/en";
import "dayjs/locale/es";
import "dayjs/locale/fr";
import "dayjs/locale/de";
import "dayjs/locale/it";
import "dayjs/locale/pt";
import "dayjs/locale/ru";
import "dayjs/locale/zh-cn";
import "dayjs/locale/zh-tw";
import "dayjs/locale/ja";
import "dayjs/locale/ko";
import "dayjs/locale/ar";
import "dayjs/locale/hi";
import "dayjs/locale/tr";
import "dayjs/locale/nl";
import "dayjs/locale/sv";
import "dayjs/locale/pl";
import "dayjs/locale/th";
import "dayjs/locale/vi";
import "dayjs/locale/id";

export const sendEmail = async (
  params: {
    sender_name: string;
    sender_email: string;
    message: string;
    subject: string;
  },
  serviceID: string,
  templateID: string,
  publicKey: string
) => {
  // Detect user locale and timezone
  const userLocale = navigator.language.toLowerCase() || "en";
  const userTimeZone =
    Intl.DateTimeFormat().resolvedOptions().timeZone || "UTC";

  // Verify if locale is pre-imported
  const supportedLocales = [
    "en",
    "es",
    "fr",
    "de",
    "it",
    "pt",
    "ru",
    "zh-cn",
    "zh-tw",
    "ja",
    "ko",
    "ar",
    "hi",
    "tr",
    "nl",
    "sv",
    "pl",
    "th",
    "vi",
    "id",
  ];
  const fallbackLocale = "en";

  const selectedLocale = supportedLocales.includes(userLocale)
    ? userLocale
    : fallbackLocale;

  // Apply locale
  dayjs.locale(selectedLocale);

  // Format timestamp
  const timestamp = dayjs().tz(userTimeZone).format("LLL"); // localized format

  // Template parameters for email
  const templateParams = {
    SENDER_NAME: params.sender_name,
    SENDER_EMAIL: params.sender_email,
    SUBJECT: params.subject,
    MESSAGE: params.message,
    TIMESTAMP: timestamp,
  };

  try {
    const result = await emailjs.send(
      serviceID,
      templateID,
      templateParams,
      publicKey
    );
    console.log("Email sent successfully:", result.text);
    return { success: true };
  } catch (error) {
    console.error("Failed to send email:", error);
    return { success: false, error };
  }
};
