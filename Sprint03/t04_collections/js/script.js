
function guestList(){
    let guestListSet = new Set();

    guestListSet.add("Vlad");
    guestListSet.add("Yura");
    guestListSet.add("Nick");
    guestListSet.add("yzet");
    guestListSet.add("Name");

    console.log(`Vlad in guest list? - ${guestListSet.has("Vlad")}`)
    console.log(`removing Vlad.. ${guestListSet.delete("Vlad")}`)
    console.log(`Vlad in guest list? - ${guestListSet.has("Vlad")}`)

}


function menu(){
    let menuMap = new Map();

    menuMap.set ("first dish", "9$");
    menuMap.set ("second dish", "99$");
    menuMap.set ("third dish", "999$");
    menuMap.set ("next dish", "9999$");
    menuMap.set ("last dish", "99999$");

    console.log(`What are dishes there? - ${menuMap.keys()}`)
    console.log(`What price of first dish? - ${menuMap.get("first dish")}`)

}


function bankVault(){
    let bankVaultMap = new WeakMap();
    let vladObj = {
        name: 'Vlad'
    }
    bankVaultMap.set(vladObj, "some content1");
    bankVaultMap.set({name: 'Yura'}, "some content2");
    bankVaultMap.set({name: 'Nick'}, "some content3");
    bankVaultMap.set({name: 'yzet'}, "some content4");
    bankVaultMap.set({name: 'Name'}, "some content5");

    console.log(`Vlad in bank Vault? - ${bankVaultMap.has(vladObj)}`);
    console.log(`removing Vlad.. ${bankVaultMap.delete(vladObj)}`);
    console.log(`Vlad in bank Vault? - ${bankVaultMap.has(vladObj)}`);


}


function coinCollection(){
    let coinCillectionSet = new WeakSet();

    let uaObj = {coin: "UA"};

    coinCillectionSet.add(uaObj);
    coinCillectionSet.add({coin: "USA"});
    coinCillectionSet.add({coin: "EU"});
    coinCillectionSet.add({coin: "PL"});
    coinCillectionSet.add({coin: "EN"});

    console.log(`UA coin in coin collection? - ${coinCillectionSet.has(uaObj)}`);
    console.log(`removing UA coin.. ${coinCillectionSet.delete(uaObj)}`);
    console.log(`UA coin in coin collection? - ${coinCillectionSet.has(uaObj)}`);


}


guestList();
menu();
bankVault();
coinCollection();
