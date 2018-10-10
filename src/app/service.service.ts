import { Injectable } from '@angular/core';
import * as Web3 from 'aion-web3';
//import wa from 'aion-web3/packages/web3-eth-accounts'

declare let web3:any;
declare let window: any;

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  private _web3: any;
  constructor() { 
    if (typeof window.web3 == 'undefined') {
      // Use Mist/MetaMask's provider
      const web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545/"))
   //console.log(web3.eth.accounts);
   console.log(web3.eth.accounts.create("aion12345"));
   //console.log(web3.eth.accounts.create("aion67890"));
   
   // console.log(web3.currentProvider)
   console.log('web3.version')
    console.log(web3.version)
    console.log("connect the metamask succesfully")
    } else {
      console.log(
        'Please use a dapp browser  for chrome'
      );
    }
  }

  cool(){
    if (typeof window.web3 == 'undefined') {
      // Use Mist/MetaMask's provider
    
      const web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545/"))
      console.log(web3.eth.accounts.create("aion12345"));
   
    console.log(web3.currentProvider)
    console.log("connect the metamask succesfully")
    console.log('web3.version')
    console.log(web3.version)
    } else {
      console.log(
        'Please use a dapp browser for chrome'
      );
    }
    }
}
