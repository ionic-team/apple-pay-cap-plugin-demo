# Apple Pay Demo Application

This is a simple demo application used to show how to implement the Capacitor Apple Pay plugin. It points to my personal Apple Pay sandbox merchant Id and relay server. You should replace all the values with your own before running this demo.

> To run this on the web, it must be deployed to a domain that is verified by Apple in the developer portal. It will not run on any un-verified domain.

### Installing Dependencies

Because the plugin is currently unpublished, this demo installs the plugin from a local directory. It should be in the following location:

```
/
/ - /capacitor-plugin-apple-pay
/ - /apple-pay-demo
```

Or, remove the plugin from the package.json and then install it by pointing to the newly checked out directory.