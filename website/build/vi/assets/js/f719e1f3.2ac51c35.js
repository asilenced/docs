"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4667],{866:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var s=n(85893),r=n(11151);const a={sidebar_position:2,title:"Collections"},o="Collections",i={id:"sdk/js/contract-structure/collections",title:"Collections",description:"When deciding on data structures to use for the application's data, it is important to minimize the amount of data read and written to storage, and the amount of data serialized and deserialized to minimize the cost of transactions. It is important to understand the tradeoffs of data structures in your smart contract because it can become a bottleneck as the application scales, and migrating the state to the new data structures will come at a cost.",source:"@site/i18n/vi/docusaurus-plugin-content-docs/current/sdk/js/contract-structure/collections.md",sourceDirName:"sdk/js/contract-structure",slug:"/sdk/js/contract-structure/collections",permalink:"/vi/sdk/js/contract-structure/collections",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/sdk/js/contract-structure/collections.md",tags:[],version:"current",lastUpdatedBy:"Github Actions",lastUpdatedAt:1704996595,formattedLastUpdatedAt:"11 thg 1, 2024",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Collections"},sidebar:"tools",previous:{title:"NearBindgen",permalink:"/vi/sdk/js/contract-structure/near-bindgen"},next:{title:"Public Methods",permalink:"/vi/sdk/js/contract-interface/public-methods"}},d={},c=[{value:"In-memory <code>Map</code> vs persistent <code>UnorderedMap</code>",id:"in-memory-map-vs-persistent-unorderedmap",level:2},{value:"Error prone patterns",id:"error-prone-patterns",level:2},{value:"<code>LookupMap</code> vs <code>UnorderedMap</code>",id:"lookupmap-vs-unorderedmap",level:2},{value:"Functionality",id:"functionality",level:3},{value:"Performance",id:"performance",level:3},{value:"Storage space",id:"storage-space",level:3}];function l(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"collections",children:"Collections"}),"\n",(0,s.jsx)(t.p,{children:"When deciding on data structures to use for the application's data, it is important to minimize the amount of data read and written to storage, and the amount of data serialized and deserialized to minimize the cost of transactions. It is important to understand the tradeoffs of data structures in your smart contract because it can become a bottleneck as the application scales, and migrating the state to the new data structures will come at a cost."}),"\n",(0,s.jsxs)(t.p,{children:["The collections within ",(0,s.jsx)(t.code,{children:"near-sdk-js"})," are designed to split the data into chunks and defer reading and writing to the store until needed. These data structures will handle the low-level storage interactions and aim to have a similar API to the ",(0,s.jsx)(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures",children:"native data structures in JavaScript"}),"."]}),"\n",(0,s.jsx)(t.p,{children:"It is important to keep in mind that when using collections, that each time state is loaded, all entries in the data structure will be read eagerly from storage and deserialized. This will come at a large cost for any non-trivial amount of data, so to minimize the amount of gas used the SDK collections should be used in most cases."}),"\n",(0,s.jsxs)(t.p,{children:["The most up to date collections and their examples can be found ",(0,s.jsx)(t.a,{href:"https://github.com/near/near-sdk-js",children:"in the repository on GitHub"}),"."]}),"\n",(0,s.jsx)(t.p,{children:"The following data structures that exist in the SDK are as follows:"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"SDK Collection"}),(0,s.jsx)(t.th,{children:"Native Equivalent"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"Vector"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"Array"})}),(0,s.jsx)(t.td,{children:"A growable array type. The values are sharded in memory and can be used for iterable and indexable values that are dynamically sized."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)("code",{children:"LookupMap"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)("code",{children:"Map"})}),(0,s.jsx)(t.td,{children:"This structure behaves as a thin wrapper around the key-value storage available to contracts. This structure does not contain any metadata about the elements in the map, so it is not iterable."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)("code",{children:"UnorderedMap"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)("code",{children:"Map"})}),(0,s.jsxs)(t.td,{children:["Similar to ",(0,s.jsx)(t.code,{children:"LookupMap"}),", except that it stores additional data to be able to iterate through elements in the data structure."]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"LookupSet"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"Set"})}),(0,s.jsxs)(t.td,{children:["A set, which is similar to ",(0,s.jsx)(t.code,{children:"LookupMap"})," but without storing values, can be used for checking the unique existence of values. This structure is not iterable and can only be used for lookups."]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"UnorderedSet"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"Set"})}),(0,s.jsxs)(t.td,{children:["An iterable equivalent of ",(0,s.jsx)(t.code,{children:"LookupSet"})," which stores additional metadata for the elements contained in the set."]})]})]})]}),"\n",(0,s.jsxs)(t.h2,{id:"in-memory-map-vs-persistent-unorderedmap",children:["In-memory ",(0,s.jsx)(t.code,{children:"Map"})," vs persistent ",(0,s.jsx)(t.code,{children:"UnorderedMap"})]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"Map"})," keeps all data in memory. To access it, the contract needs to deserialize the whole map."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"UnorderedMap"})," keeps data in persistent storage. To access an element, you only need to deserialize this element."]}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:["Use ",(0,s.jsx)(t.code,{children:"Map"})," in case:"]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["Need to iterate over all elements in the collection ",(0,s.jsx)(t.strong,{children:"in one function call"}),"."]}),"\n",(0,s.jsx)(t.li,{children:"The number of elements is small or fixed, e.g. less than 10."}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:["Use ",(0,s.jsx)(t.code,{children:"UnorderedMap"})," in case:"]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Need to access a limited subset of the collection, e.g. one or two elements per call."}),"\n",(0,s.jsx)(t.li,{children:"Can't fit the collection into memory."}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:["The reason is ",(0,s.jsx)(t.code,{children:"Map"})," deserializes (and serializes) the entire collection in one storage operation. Accessing the entire collection is cheaper in gas than accessing all elements through ",(0,s.jsx)(t.code,{children:"N"})," storage operations."]}),"\n",(0,s.jsxs)(t.p,{children:["Example of ",(0,s.jsx)(t.code,{children:"Map"}),":"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-javascript",children:'import { NearBindgen, call, view, near } from "near-sdk-js";\n\n@NearBindgen({})\nexport class StatusMessage {\n  constructor() {\n    this.records = new Map();\n  }\n\n  @call({})\n  set_status({ message }) {\n    let account_id = near.signerAccountId();\n    near.log(`${account_id} set_status with message ${message}`);\n    this.records.set(account_id, message);\n  }\n\n  @view({})\n  get_status({ account_id }) {\n    near.log(`get_status for account_id ${account_id}`);\n    return this.records.get(account_id);\n  }\n}\n'})}),"\n",(0,s.jsxs)(t.p,{children:["Example of ",(0,s.jsx)(t.code,{children:"UnorderedMap"}),":"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-javascript",children:'import { NearBindgen, call, view, near, UnorderedMap } from "near-sdk-js";\n\n@NearBindgen({})\nexport class StatusMessage {\n  constructor() {\n    this.records = new UnorderedMap("a");\n  }\n\n  @call({})\n  set_status({ message }) {\n    let account_id = near.signerAccountId();\n    near.log(`${account_id} set_status with message ${message}`);\n    this.records.set(account_id, message);\n  }\n\n  @view({})\n  get_status({ account_id }) {\n    near.log(`get_status for account_id ${account_id}`);\n    return this.records.get(account_id);\n  }\n\n  @view({})\n  get_all_statuses() {\n    return this.records.toArray();\n  }\n}\n'})}),"\n",(0,s.jsx)(t.h2,{id:"error-prone-patterns",children:"Error prone patterns"}),"\n",(0,s.jsx)(t.p,{children:"Because the values are not kept in memory and are lazily loaded from storage, it's important to make sure if a collection is replaced or removed, that the storage is cleared. In addition, it is important that if the collection is modified, the collection itself is updated in state because most collections will store some metadata."}),"\n",(0,s.jsx)(t.p,{children:"Some error-prone patterns to avoid that cannot be restricted at the type level are:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-javascript",children:'import { UnorderedMap, assert } from "near-sdk-js";\n\nlet m = new UnorderedMap("m");\nm.insert(1, "test");\nassert(m.length(), 1);\nassert(m.get(1), "test");\n\n// Bug 1: Should not replace any collections without clearing state, this will reset any\n// metadata, such as the number of elements, leading to bugs. If you replace the collection\n// with something with a different prefix, it will be functional, but you will lose any\n// previous data and the old values will not be removed from storage.\nlet m = new UnorderedMap("m");\nassert(m.length(), 0);\nassert(m.get(1), "test");\n\n// Bug 2: Should not use the same prefix as another collection\n// or there will be unexpected side effects.\nlet m2 = new UnorderedMap("m");\nassert(m2.length(), 0);\nassert(m2.get(1), "test");\n'})}),"\n",(0,s.jsxs)(t.h2,{id:"lookupmap-vs-unorderedmap",children:[(0,s.jsx)(t.code,{children:"LookupMap"})," vs ",(0,s.jsx)(t.code,{children:"UnorderedMap"})]}),"\n",(0,s.jsx)(t.h3,{id:"functionality",children:"Functionality"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"UnorderedMap"})," supports iteration over keys and values, and also supports pagination. Internally, it has the following structures:","\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"a prefix value"}),"\n",(0,s.jsx)(t.li,{children:"a vector of keys"}),"\n",(0,s.jsxs)(t.li,{children:["a ",(0,s.jsx)(t.code,{children:"LookupMap"})," of keys and values"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"LookupMap"})," only has a prefix, reading values to and from the contract's storage. Without a vector of keys, it doesn't have the ability to iterate over keys."]}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"performance",children:"Performance"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:"LookupMap"})," has a better performance and stores less data compared to ",(0,s.jsx)(t.code,{children:"UnorderedMap"}),"."]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"UnorderedMap"})," requires ",(0,s.jsx)(t.code,{children:"2"})," storage reads to get the value and storage writes to insert a new entry."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"LookupMap"})," requires only one storage read to get the value and only one storage write to store it."]}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"storage-space",children:"Storage space"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:"UnorderedMap"})," requires more storage for an entry compared to a ",(0,s.jsx)(t.code,{children:"LookupMap"}),"."]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"UnorderedMap"})," stores the key twice (once in the first vector and once in its ",(0,s.jsx)(t.code,{children:"LookupMap"}),") and value once."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"LookupMap"})," stores key and value once."]}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>i,a:()=>o});var s=n(67294);const r={},a=s.createContext(r);function o(e){const t=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(a.Provider,{value:t},e.children)}}}]);