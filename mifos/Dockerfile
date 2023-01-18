FROM tomcat:8.5-jre8-alpine

RUN apk add --no-cache mysql-client

COPY ./server.xml /usr/local/tomcat/conf/server.xml

COPY ./fineract-provider.war /usr/local/tomcat/webapps/fineract-provider.war

COPY ./community-app/ /usr/local/tomcat/webapps/community-app

# RUN cd /usr/local/tomcat/webapps/

# RUN mv ROOT OLDROOT && mv community-app ROOT

COPY ./api-docs /usr/local/tomcat/webapps/api-docs

# ADD ./test/ /usr/local/tomcat/webapps/test/ 

RUN cd /root && mkdir .mifosx

COPY ./pentahoReports /root/.mifosx/pentahoReports

COPY ./libs /usr/local/tomcat/lib

COPY ./entrypoint.sh /entrypoint.sh

RUN chmod +x /entrypoint.sh

RUN mkdir -p /run/mysqld \
	&& chown 999 /run/mysqld

#VOLUME /docker-entrypoint-initdb.d

ENTRYPOINT /entrypoint.sh
