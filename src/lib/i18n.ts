export async function loadMessages(locale: string, namespaces: string[]) {
  const allMessages = {};

  for (const ns of namespaces) {
    const messagesModule = await import(`@/i18n/messages/${locale}/${ns}.json`);
    Object.assign(allMessages, messagesModule.default);
  }

  return allMessages;
}
