var _0x5307=["\x49\x53\x53","\x68\x74\x74\x70\x3A\x2F\x2F\x77\x77\x77\x2E\x6E\x32\x79\x6F\x2E\x63\x6F\x6D\x2F\x73\x61\x74\x2F\x77\x67\x74\x2E\x70\x68\x70\x3F\x73\x3D","\x26\x72\x6B\x3D","\x72\x61\x6E\x64\x6F\x6D","\x70\x61\x72\x73\x65","\x26\x63\x61\x6C\x6C\x62\x61\x63\x6B\x3D\x3F","\x69\x64","\x6C\x61\x74","\x6C\x6E\x67","\x61\x6C\x74","\x73\x70","\x63\x61\x6D\x65\x72\x61\x74\x6F\x56\x52\x53\x53\x31","\x63\x6F\x6E\x74\x65\x6E\x74\x57\x69\x6E\x64\x6F\x77","\x69\x66\x72\x6D\x43\x65\x73\x69\x75\x6D","\x67\x65\x74\x45\x6C\x65\x6D\x65\x6E\x74\x42\x79\x49\x64","\x61\x64\x64\x56\x52\x53\x53\x31","\x43\x65\x73\x69\x75\x6D","\x65\x6C\x6C\x69\x70\x73\x6F\x69\x64","\x6D\x6F\x76\x65\x56\x52\x53\x53\x31","\x66\x72\x6F\x6D\x44\x65\x67\x72\x65\x65\x73","\x43\x61\x72\x74\x6F\x67\x72\x61\x70\x68\x69\x63","\x63\x61\x72\x74\x6F\x67\x72\x61\x70\x68\x69\x63\x54\x6F\x43\x61\x72\x74\x65\x73\x69\x61\x6E","\x6E\x6F\x72\x74\x68\x45\x61\x73\x74\x44\x6F\x77\x6E\x54\x6F\x46\x69\x78\x65\x64\x46\x72\x61\x6D\x65","\x54\x72\x61\x6E\x73\x66\x6F\x72\x6D\x73","\x66\x72\x6F\x6D\x54\x72\x61\x6E\x73\x6C\x61\x74\x69\x6F\x6E","\x4D\x61\x74\x72\x69\x78\x34","\x6D\x75\x6C\x74\x69\x70\x6C\x79","\x6D\x6F\x64\x65\x6C\x4D\x61\x74\x72\x69\x78","\x56\x52\x53\x53\x31\x72\x65\x63\x74\x61\x6E\x67\x75\x6C\x61\x72\x53\x65\x6E\x73\x6F\x72","","\x26\x75\x61\x72\x72\x3B","\x26\x64\x61\x72\x72\x3B","\x74\x6F\x46\x69\x78\x65\x64","\x74\x65\x78\x74","\x23\x73\x70\x6C\x61\x74","\x23\x73\x70\x6C\x6F\x6E","\x23\x73\x70\x61\x6C\x74","\x23\x73\x70\x73\x70\x64","\x73\x74\x61\x72\x74","\x74\x6F\x47\x4D\x54\x53\x74\x72\x69\x6E\x67","\x73\x74\x65\x70","\x6E\x61\x6D\x65","\x6C\x65\x6E\x67\x74\x68","\x70\x6F\x73","\x64","\x70\x75\x73\x68","\x7C","\x73\x70\x6C\x69\x74","\x61\x62\x73","\x67\x65\x74\x4A\x53\x4F\x4E","\x66\x6C\x6F\x6F\x72","\x6C\x61\x74\x6C\x6E\x67","\x61\x6E\x69\x6D\x61\x74\x65\x53\x61\x74\x28\x29","\x50\x49","\x73\x69\x6E","\x63\x6F\x73","\x73\x71\x72\x74","\x61\x74\x61\x6E\x32"];var sid=38782;var lat;var lng;var step;var counter=0;var satname=_0x5307[0];var url=_0x5307[1]+sid+_0x5307[2]+eval(Math[_0x5307[3]]()*Date[_0x5307[4]]( new Date()))+_0x5307[5];var data;var dArray= new Array();var altitude;var sunOverlay;var dayNightOverlay;function ObjectPosition(_0xaa08xe,_0xaa08xf,_0xaa08x10,_0xaa08x11,_0xaa08x12){this[_0x5307[6]]=_0xaa08xe;this[_0x5307[7]]=_0xaa08xf;this[_0x5307[8]]=_0xaa08x10;this[_0x5307[9]]=_0xaa08x11;this[_0x5307[10]]=_0xaa08x12;} ;function addVRSS1(lat,lng,_0xaa08x14){document[_0x5307[14]](_0x5307[13])[_0x5307[12]][_0x5307[11]](lat,lng,_0xaa08x14);document[_0x5307[14]](_0x5307[13])[_0x5307[12]][_0x5307[15]](lat,lng,_0xaa08x14);} ;function moveVRSS1(lat,lng,_0xaa08x14){var _0xaa08x16=document[_0x5307[14]](_0x5307[13])[_0x5307[12]][_0x5307[16]];var _0xaa08x17=document[_0x5307[14]](_0x5307[13])[_0x5307[12]][_0x5307[17]];document[_0x5307[14]](_0x5307[13])[_0x5307[12]][_0x5307[18]](lat,lng,_0xaa08x14);var _0xaa08x18=_0xaa08x16[_0x5307[23]][_0x5307[22]](_0xaa08x17[_0x5307[21]](_0xaa08x16[_0x5307[20]][_0x5307[19]](lng,lat)));_0xaa08x18=_0xaa08x16[_0x5307[25]][_0x5307[26]](_0xaa08x18,_0xaa08x16[_0x5307[25]][_0x5307[24]]( new _0xaa08x16.Cartesian3(0.0,0.0,-_0xaa08x14)),_0xaa08x18);document[_0x5307[14]](_0x5307[13])[_0x5307[12]][_0x5307[28]][_0x5307[27]]=_0xaa08x18;} ;function animateSat(){var _0xaa08x1a=getInterpolatedData();if(_0xaa08x1a!=null){var _0xaa08x1b=_0xaa08x1a[_0x5307[7]];var _0xaa08x1c=_0xaa08x1a[_0x5307[8]];var _0xaa08x1d=_0xaa08x1a[_0x5307[9]];var _0xaa08x1e=_0xaa08x1a[_0x5307[10]];var _0xaa08x1f=_0x5307[29];if(_0xaa08x1d>altitude){_0xaa08x1f=_0x5307[30];} else {_0xaa08x1f=_0x5307[31];} ;altitude=_0xaa08x1d;$(_0x5307[34])[_0x5307[33]](_0xaa08x1b[_0x5307[32]](2));$(_0x5307[35])[_0x5307[33]](_0xaa08x1c[_0x5307[32]](2));$(_0x5307[36])[_0x5307[33]](_0xaa08x1d[_0x5307[32]](2));$(_0x5307[37])[_0x5307[33]](_0xaa08x1e[_0x5307[32]](2));moveVRSS1(_0xaa08x1b,_0xaa08x1c,_0xaa08x1d*1000);} ;counter++;} ;function loadData(){jQuery[_0x5307[49]](url,function (data){var _0xaa08x21=parseInt(data[_0x5307[38]]);var _0xaa08x22;var _0xaa08x23= new Date();var _0xaa08x24=_0xaa08x23[_0x5307[39]]();var _0xaa08x25=Date[_0x5307[4]](_0xaa08x24)/1000;var _0xaa08x26= new Array();step=parseInt(data[_0x5307[40]]);satname=data[_0x5307[41]];for(var _0xaa08x27=0;_0xaa08x27<data[_0x5307[43]][_0x5307[42]];_0xaa08x27++){_0xaa08x26[_0x5307[45]](data[_0x5307[43]][_0xaa08x27][_0x5307[44]]);} ;for(var _0xaa08x27=_0xaa08x21;_0xaa08x27<_0xaa08x26[_0x5307[42]];_0xaa08x27++){var _0xaa08x28=_0xaa08x26[_0xaa08x27][_0x5307[47]](_0x5307[46]);if(Math[_0x5307[48]](_0xaa08x25-parseInt(_0xaa08x28[3]))<step){_0xaa08x22=_0xaa08x27;break ;} ;} ;if(_0xaa08x22==undefined){_0xaa08x22=0;} ;dArray= new Array();for(var _0xaa08x27=_0xaa08x22;_0xaa08x27<_0xaa08x26[_0x5307[42]];_0xaa08x27++){var _0xaa08x28=_0xaa08x26[_0xaa08x27][_0x5307[47]](_0x5307[46]);dArray[_0xaa08x27-_0xaa08x22]= new ObjectPosition(sid,_0xaa08x28[0],_0xaa08x28[1],parseFloat(_0xaa08x28[2]),parseFloat(_0xaa08x28[4]));} ;addVRSS1(dArray[0][_0x5307[7]]*1,dArray[0][_0x5307[8]]*1,dArray[0][_0x5307[9]]*1000);} );} ;function getInterpolatedData(){var _0xaa08x2a=Math[_0x5307[50]](counter/step);if((dArray[_0x5307[42]]!=0)&&(dArray[_0x5307[42]]-2>_0xaa08x2a)){if(Math[_0x5307[48]]((dArray[_0xaa08x2a+1][_0x5307[8]])-(dArray[_0xaa08x2a][_0x5307[8]]))>300){if((dArray[_0xaa08x2a+1][_0x5307[51]])[_0x5307[8]]()<0){var _0xaa08x2b=(parseFloat(dArray[_0xaa08x2a+1][_0x5307[8]])+360-parseFloat(dArray[_0xaa08x2a][_0x5307[8]]))/step;} else {var _0xaa08x2b=(parseFloat(dArray[_0xaa08x2a+1][_0x5307[8]])-360-parseFloat(dArray[_0xaa08x2a][_0x5307[8]]))/step;} ;} else {var _0xaa08x2b=(parseFloat(dArray[_0xaa08x2a+1][_0x5307[8]])-parseFloat(dArray[_0xaa08x2a][_0x5307[8]]))/step;} ;var _0xaa08x2c=(parseFloat(dArray[_0xaa08x2a+1][_0x5307[7]])-parseFloat(dArray[_0xaa08x2a][_0x5307[7]]))/step;var _0xaa08x2d=(dArray[_0xaa08x2a+1][_0x5307[9]]-dArray[_0xaa08x2a][_0x5307[9]])/step;var _0xaa08x2e=(dArray[_0xaa08x2a+1][_0x5307[10]]-dArray[_0xaa08x2a][_0x5307[10]])/step;var _0xaa08x2f=_0xaa08x2c*(counter%step)+parseFloat(dArray[_0xaa08x2a][_0x5307[7]]);var _0xaa08x30=_0xaa08x2b*(counter%step)+parseFloat(dArray[_0xaa08x2a][_0x5307[8]]);var _0xaa08x31=_0xaa08x2d*(counter%step)+dArray[_0xaa08x2a][_0x5307[9]];var _0xaa08x32=getSpeed(_0xaa08x2f,_0xaa08x2c,_0xaa08x2b,_0xaa08x31);var _0xaa08x33= new ObjectPosition(sid,_0xaa08x2f,_0xaa08x30,_0xaa08x31,_0xaa08x32);return _0xaa08x33;} else {if(dArray[_0x5307[42]]-2>_0xaa08x2a){loadData();counter=0;setInterval(_0x5307[52],1000);} ;} ;} ;function getSpeed(_0xaa08x35,_0xaa08x36,_0xaa08x37,_0xaa08x38){var _0xaa08x2c=_0xaa08x36*Math[_0x5307[53]]/180;var _0xaa08x39=_0xaa08x37*Math[_0x5307[53]]/180;var _0xaa08x3a=_0xaa08x35*Math[_0x5307[53]]/180;var _0xaa08x3b=(_0xaa08x35+_0xaa08x36)*Math[_0x5307[53]]/180;var _0xaa08xe=Math[_0x5307[54]](_0xaa08x2c/2)*Math[_0x5307[54]](_0xaa08x2c/2)+Math[_0x5307[55]](_0xaa08x3a)*Math[_0x5307[55]](_0xaa08x3b)*Math[_0x5307[54]](_0xaa08x39/2)*Math[_0x5307[54]](_0xaa08x39/2);var _0xaa08x10=2*Math[_0x5307[57]](Math[_0x5307[56]](_0xaa08xe),Math[_0x5307[56]](1-_0xaa08xe));var _0xaa08x3c=(_0xaa08x38+6378.135)*_0xaa08x10;return _0xaa08x3c;} ;