declare global {
  interface Window {
    DIALOG_INSTANCE?: {
      setWalletAddress: (walletAddress: string) => void;
    };
  }
}

const PROD_BASE_API_URL =
  'https://dipkpvvsc1.execute-api.eu-west-1.amazonaws.com';

const IDENTIFY_PATH = '/identify';
export class Analytics {
  private apiKey: string;

  constructor(apiKey: string) {
    this.apiKey = apiKey;
  }

  identify({
    walletAddress,
    chainId,
    traits,
  }: {
    walletAddress: string;
    chainId: string;
    traits?: {
      email?: string;
      firstName?: string;
      lastName?: string;
      discordUsername?: string;
      telegramUsername?: string;
      twitterProfileUrl?: string;
      phone?: string;
      internalId?: string;
      createdAt?: string;
    } & { [key: string]: string | number };
  }): void {
    if (window.DIALOG_INSTANCE !== undefined) {
      window.DIALOG_INSTANCE.setWalletAddress(walletAddress);
    }

    const apiUrl = `${PROD_BASE_API_URL}${IDENTIFY_PATH}?apiKey=${this.apiKey}`;
    void fetch(apiUrl, {
      method: 'POST',
      body: JSON.stringify({
        walletAddress,
        location: window.location.toString(),
        chainId,
        traits,
      }),
    });
  }
}
