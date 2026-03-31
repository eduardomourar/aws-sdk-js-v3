// @ts-nocheck
// generated code, do not edit
import { RuleSetObject } from "@smithy/types";

/* This file is compressed. Log this object
   or see "smithy.rules#endpointRuleSet"
   in codegen/sdk-codegen/aws-models/sustainability.json */

const v="argv",
w="ref",
x="authSchemes",
y="name",
z="signingRegion";
const a=true,
b=false,
c="isSet",
d="error",
e="sigv4",
f="endpoint",
g="tree",
h="PartitionResult",
i="stringEquals",
j={"required":false,"type":"string"},
k={[w]:"Endpoint"},
l={"fn":"booleanEquals",[v]:[{[w]:"UseFIPS"},true]},
m={[y]:"sigv4a","signingRegionSet":["*"]},
n={},
o={"fn":"getAttr",[v]:[{[w]:h},"name"]},
p={"fn":"booleanEquals",[v]:[{[w]:"UseFIPS"},false]},
q={"fn":i,[v]:[o,"aws-us-gov"]},
r={[x]:[m,{[y]:e,[z]:"us-gov-west-1"}]},
s={[x]:[m,{[y]:e,[z]:"{PartitionResult#implicitGlobalRegion}"}]},
t=[l],
u=[{[w]:"Region"}];
const _data={version:"1.0",parameters:{UseFIPS:{required:a,default:b,type:"boolean"},Endpoint:j,Region:j},rules:[{conditions:[{fn:c,[v]:[k]}],rules:[{conditions:t,error:"Invalid Configuration: FIPS and custom endpoint are not supported",type:d},{endpoint:{url:k,properties:{[x]:[m,{[y]:e}]},headers:n},type:f}],type:g},{rules:[{conditions:[{fn:c,[v]:u}],rules:[{conditions:[{fn:"aws.partition",[v]:u,assign:h}],rules:[{conditions:[{fn:i,[v]:[o,"aws"]},p],endpoint:{url:"https://api.sustainability.{Region}.{PartitionResult#dualStackDnsSuffix}",properties:{[x]:[m,{[y]:e,[z]:"us-east-1"}]},headers:n},type:f},{conditions:[q,p],endpoint:{url:"https://sustainability.us-gov.{PartitionResult#dualStackDnsSuffix}",properties:r,headers:n},type:f},{conditions:[q,l],endpoint:{url:"https://sustainability-fips.us-gov.{PartitionResult#dualStackDnsSuffix}",properties:r,headers:n},type:f},{conditions:t,endpoint:{url:"https://sustainability-fips.global.{PartitionResult#dualStackDnsSuffix}",properties:s,headers:n},type:f},{endpoint:{url:"https://sustainability.global.{PartitionResult#dualStackDnsSuffix}",properties:s,headers:n},type:f}],type:g}],type:g},{error:"Invalid Configuration: Missing Region",type:d}],type:g}]};
export const ruleSet: RuleSetObject = _data;
