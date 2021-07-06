var url="";
	
if(process.env.NODE_ENV=="development"){
	
	url="http://fq2.miappcs.12329app.com/miapp/mini00077500."
}
if(process.env.NODE_ENV=="production"){
	url="http://fq2.miappcs.12329app.com/miapp/mini00077500."
}
export default{
	url
}