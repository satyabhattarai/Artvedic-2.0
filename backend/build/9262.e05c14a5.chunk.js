"use strict";(self.webpackChunkbackend=self.webpackChunkbackend||[]).push([[9262],{99262:(W,s,_)=>{_.r(s),_.d(s,{UserListPageEE:()=>m});var a=_(92132),o=_(71563),n=_(61713),A=_(21272),C=_(55506),R=_(5409),l=_(88880),U=_(15126),v=_(63299),B=_(67014),t=_(59080),i=_(79275),L=_(14718),I=_(82437),d=_(61535),O=_(5790),T=_(12083),M=_(35223),E=_(74930),D=_(2600),K=_(48940),P=_(41286),h=_(56336),f=_(13426),r=_(84624),g=_(77965),S=_(54257),y=_(71210),j=_(51187),N=_(39404),V=_(58692),F=_(501),x=_(57646),z=_(23120),H=_(44414),X=_(25962),Y=_(14664),$=_(42588),G=_(90325),Q=_(62785),c=_(87443),J=_(41032),Z=_(22957),e=_(93179),u=_(73055),p=_(15747),k=_(85306),w=_(26509),b=_(32058),q=_(81185),__=_(82261),E_=_(62482),t_=_(81623),s_=_(19983),O_=_(92495),M_=_(55151),D_=_(79077),P_=_(67031);const m=()=>((0,n.u)(),(0,a.jsx)(o.e,{}))},61713:(W,s,_)=>{_.d(s,{u:()=>B});var a=_(21272),o=_(55506),n=_(67031),A=_(54894),C=_(17703),R=_(88880);const l="strapi-notification-seat-limit",U="https://cloud.strapi.io/profile/billing",v="https://strapi.io/billing/request-seats",B=()=>{const{formatMessage:t}=(0,A.A)(),{license:i,isError:L,isLoading:I}=(0,R.m)(),d=(0,o.hN)(),{pathname:O}=(0,C.zy)(),{enforcementUserCount:T,permittedSeats:M,licenseLimitStatus:E,isHostedOnStrapiCloud:D}=i??{};a.useEffect(()=>{if(L||I)return;const K=!n(M)&&!window.sessionStorage.getItem(`${l}-${O}`)&&(E==="AT_LIMIT"||E==="OVER_LIMIT");let P;E==="OVER_LIMIT"?P="warning":E==="AT_LIMIT"&&(P="softWarning"),K&&d({type:P,message:t({id:"notification.ee.warning.over-.message",defaultMessage:"Add seats to {licenseLimitStatus, select, OVER_LIMIT {invite} other {re-enable}} Users. If you already did it but it's not reflected in Strapi yet, make sure to restart your app."},{licenseLimitStatus:E}),title:t({id:"notification.ee.warning.at-seat-limit.title",defaultMessage:"{licenseLimitStatus, select, OVER_LIMIT {Over} other {At}} seat limit ({enforcementUserCount}/{permittedSeats})"},{licenseLimitStatus:E,enforcementUserCount:T,permittedSeats:M}),link:{url:D?U:v,label:t({id:"notification.ee.warning.seat-limit.link",defaultMessage:"{isHostedOnStrapiCloud, select, true {ADD SEATS} other {CONTACT SALES}}"},{isHostedOnStrapiCloud:D})},blockTransition:!0,onClose(){window.sessionStorage.setItem(`${l}-${O}`,"true")}})},[d,i,O,t,I,M,E,T,D,L])}}}]);
