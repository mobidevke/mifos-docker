FROM tomcat:9-jre8-alpine

RUN apk add --no-cache mysql-client

ADD ./server.xml /usr/local/tomcat/conf/server.xml

ADD ./fineract-provider.war /usr/local/tomcat/webapps/fineract-provider.war

ADD ./community-app/ /usr/local/tomcat/webapps/community-app

# RUN cd /usr/local/tomcat/webapps/

# RUN mv ROOT OLDROOT && mv community-app ROOT

ADD ./api-docs /usr/local/tomcat/webapps/api-docs

# ADD ./test/ /usr/local/tomcat/webapps/test/ 

RUN cd /root && mkdir .mifosx

ADD ./pentahoReports /root/.mifosx/pentahoReports

ADD ./libs /usr/local/tomcat/lib

ADD ./entrypoint.sh /entrypoint.sh

RUN chmod +x /entrypoint.sh

RUN mkdir -p /run/mysqld \
	&& chown 999 /run/mysqld

#VOLUME /docker-entrypoint-initdb.d

ENTRYPOINT /entrypoint.sh
