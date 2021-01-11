import { Component } from '@angular/core';
import { Plugins } from '@capacitor/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor() {}

  async isAvailable(): Promise<void> {
    const { ApplePay } = Plugins;
    console.log(
      await ApplePay.canMakePayments({
        merchantCapabilities: [],
        supportedNetworks: [],
      }),
    );
  }

  async paymentTest(): Promise<void> {
    const { ApplePay } = Plugins;
    console.log(
      await ApplePay.makePaymentRequest({
        merchant: {
          countryCode: 'US',
          currencyCode: 'USD',
          merchantCapabilities: [],
          merchantId: 'merchant.com.dallastjames.applepay.test',
          supportedNetworks: [],
        },
        summaryItems: [
          {
            amount: '1.00',
            label: 'Test Item',
          },
        ],
        total: {
          amount: '1.00',
          label: 'Total',
        },
      }),
    );
  }
}
