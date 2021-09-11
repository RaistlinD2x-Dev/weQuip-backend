# Pulls AWS provided baseline container code
FROM public.ecr.aws/lambda/nodejs:14

# workdir within container image
ARG FUNCTION_DIR="/var/task"

# Create function directory
RUN mkdir -p ${FUNCTION_DIR}

# Copy modules and package.json into directory
COPY app.js ${FUNCTION_DIR}
COPY package.json ${FUNCTION_DIR}
COPY mongoconnection.js ${FUNCTION_DIR}
COPY vendorSchema.js ${FUNCTION_DIR}

# Install NPM dependencies for function
RUN npm install

# Command can be overwritten by providing a different command in the template directly.
CMD ["app.lambdaHandler"]
