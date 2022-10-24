const envConfig = {
    berealUrl: process.env.bereal_url,
    iosReceipt: process.env.ios_receipt,
    loginKey: process.env.login_key ?? 'invalid',
    iosBundleId: process.env.ios_bundle_id
}

export default envConfig;
