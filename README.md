# FYP-Decentralized-Credit-Score-System
			# Instructions
First of download all Hypereldger Fabric binaries to setup your Blockchain Enviorment.
run this commond to download 

Step-1: $ curl -sSL https://bit.ly/2ysbOFE | bash -s -- 2.2.3 1.5.0

Step-2: After successfully download the binaries now run setup new and customized enviorment for project DC(Decentralized Credit) Score System 
	You must have two file
		1.crypto-config.yaml (file)
		2. cryptogen 	     (tool)
	then run this below commond  
	$ ./cryptogen generate --config=./crypto-config.yaml
	After that the folder will be created ,that folder is your first Hyperledger fabric network ,where two organization ,and order will be placed

step-3: For creating the genesis Block run the below commond . 
	$ ./configtxgen -profile TwoOrgsOrdererGenesis -outputBlock ./channel-artifacts/genesis.block	
	
step-4: Create Configuration Transaction.
	$ ./configtxgen -profile TwoOrgsChannel -outputCreateChannelTx ./channel-artifacts/channel.tx -channelID testChannel

step-5: create anchor peer certificate of ORG1 .
        $ ./configtxgen -profile  TwoOrgsChannel -outputAnchorPeersUpdate ./channel-artifacts/Org1MSPanchors.tx -channelID testChannel -asOrg Org1MSP


step-5: create anchor peer certificate of ORG2 .
	$ ./configtxgen -profile  TwoOrgsChannel -outputAnchorPeersUpdate ./channel-artifacts/Org2MSPanchors.tx -channelID testChannel -asOrg Org2MSP



step-6: create images of all component :which are contain in composer-cli.ymal file like: orderer, organization peers,anchor peer
	$ docker-compose -f docker-compose-cli.yaml up -d 
	this commond will create the hyperledger fabric network up with all existing component 
	(If you want to see the realtime logs for your network, then do not supply the -d flag. If you let the logs stream, then you will need to open a second terminal to execute the CLI 		calls.) 

step-7: After runnung up the Fabric Network run commond to create channel.
	$ ./createChannel.sh 
	it will create channel Between two Organization Org1 and Org2

Step-8: next Step is to install and instantiate the chaincode. 
	$ ./installchaincode.sh
	upto now all the blockchain work has been done . Now goto serverdirectory and run the both server and use calculate the Credit Score .

Step-9: To run the server1 goto  /server1 directory
  	$ node main.js


Step-10:To run the server2 goto  /server2 directory
  	$ node main.js


All the necessary Stuff has been susscuflly completed ,now By following the above process the project DC(Decentralized Credit) Score System can be used . Thank you


