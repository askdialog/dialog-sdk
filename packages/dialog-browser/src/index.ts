declare global {
  interface Window {
    DIALOG_INSTANCE?: {
      setWalletAddress: (walletAddress: string) => void;
    };
  }
}
export class Analytics {
  private apiKey: string;

  constructor(apiKey: string) {
    this.apiKey = apiKey;
  }

  identify({
    walletAddress,
    chainId,
  }: {
    walletAddress: string;
    chainId: string;
  }): void {
    if (window.DIALOG_INSTANCE !== undefined) {
      window.DIALOG_INSTANCE.setWalletAddress(walletAddress);
    }

    const apiUrl = `https://dipkpvvsc1.execute-api.eu-west-1.amazonaws.com/analytics/wallet`;
    window.navigator.sendBeacon(
      apiUrl,
      JSON.stringify({
        address: walletAddress,
        organization: this.apiKey,
        location: window.location.toString(),
        chainId,
      }),
    );
  }
}
