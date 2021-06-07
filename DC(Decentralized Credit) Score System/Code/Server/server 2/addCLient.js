module.exports.loanClientInfo = function(cnic,loanType,loanAmount,yearPlan,depositeDate,month,amount,jan1,feb1,mar1,aprl1,may1,june1,jul1,aug1,sep1,oct1,nov1,dec1,callback){

    console.log(cnic);
        /*
     * SPDX-License-Identifier: Apache-2.0
     */
    
    'use strict';
    
    const { Gateway, Wallets } = require('fabric-network');
    const path = require('path');
    const fs = require('fs');
    
    
    async function main() {
        try {
            // load the network configuration
            const ccpPath = path.resolve(__dirname, '..',  'connection', 'connection-org2.json');
            const ccp = JSON.parse(fs.readFileSync(ccpPath, 'utf8'));
    
            // Create a new file system based wallet for managing identities.
            const walletPath = path.join(process.cwd(), 'wallet');
            const wallet = await Wallets.newFileSystemWallet(walletPath);
            console.log(`Wallet path: ${walletPath}`);
    
            // Check to see if we've already enrolled the user.
            const identity = await wallet.get('org2appUser1');
            if (!identity) {
                console.log('An identity for the user "org2appUser1" does not exist in the wallet');
                console.log('Run the registerUser.js application before retrying');
                return;
            }
    
            // Create a new gateway for connecting to our peer node.
            const gateway = new Gateway();
            await gateway.connect(ccp, { wallet, identity: 'org2appUser1', discovery: { enabled: true, asLocalhost: true } });
    
            // Get the network (channel) our contract is deployed to.
            const network = await gateway.getNetwork('mychannel');
    
            // Get the contract from the network.
            const contract = network.getContract('fabcar');
    
        const  result = await contract.submitTransaction('ClientPrivateRecord',cnic,loanType,loanAmount,'20/03/2021',yearPlan,depositeDate,month,amount,jan1,feb1,mar1,aprl1,may1,june1,jul1,aug1,sep1,oct1,nov1,dec1,'org2loan','org2msp');
       console.log(result.toString());
       callback(result.toString());
       // Disconnect from the gateway.
       await gateway.disconnect();

       } catch (error) {
            console.error(`Failed to evaluate transaction: ${error}`);
            process.exit(1);
        }
        }
    
    
    main();
    }
    