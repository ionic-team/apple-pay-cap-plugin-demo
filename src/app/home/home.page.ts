import { Component } from '@angular/core';
import { Plugins } from '@capacitor/core';
import {
  ApplePayMerchantCapabilities,
  ApplePaySupportedNetworks,
} from 'capacitor-plugin-apple-pay';

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
        merchantIdentifier: 'merchant.com.dallastjames.applepay.test',
        supportedNetworks: [
          ApplePaySupportedNetworks.VISA,
          ApplePaySupportedNetworks.MASTERCARD,
          ApplePaySupportedNetworks.AMEX,
          ApplePaySupportedNetworks.DISCOVER,
        ],
      }),
    );
  }

  async paymentTest(): Promise<void> {
    const { ApplePay } = Plugins;
    console.log(
      await ApplePay.makePaymentRequest({
        version: 4,
        merchantValidation: {
          url:
            'https://applepayrelay.dallastjames.com/applepayrelay/session/start',
          params: {
            merchantIdentifier: 'merchant.com.dallastjames.applepay.test',
            displayName: 'Dallas James Test Store',
            initiative: 'web',
            initiativeContext: 'applepay.dallastjames.com',
          },
        },
        paymentAuthorization: {
          url:
            'https://applepayrelay.dallastjames.com/applepayrelay/session/authorize',
        },
        request: {
          countryCode: 'US',
          currencyCode: 'USD',
          merchantCapabilities: [
            ApplePayMerchantCapabilities.DEBIT,
            ApplePayMerchantCapabilities.CREDIT,
            ApplePayMerchantCapabilities.THREEDS,
          ],
          supportedNetworks: [
            ApplePaySupportedNetworks.VISA,
            ApplePaySupportedNetworks.MASTERCARD,
            ApplePaySupportedNetworks.AMEX,
            ApplePaySupportedNetworks.DISCOVER,
          ],
          lineItems: [
            {
              amount: '1.00',
              label: 'Test Item',
            },
          ],
          total: {
            amount: '1.00',
            label: 'Total',
            type: 'final',
          },
        },
      }),
    );
  }
}
