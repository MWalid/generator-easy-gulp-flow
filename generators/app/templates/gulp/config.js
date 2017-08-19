var Config = {

    ftpHost: '<%= ftpHost %>',
    ftpUser: '<%= ftpUser %>',
    ftpPassword: '<%= ftpPassword %>',

    localCompressed: `${__dirname}/../compressed/code.zip`,

    get remoteDirectory() { return '<%= remoteDirectory %>' },
    // must include trailing slash

    get remoteCompressed() { return this.remoteDirectory + 'code.zip' },

    sshHost: '<%= sshHost %>',
    sshUser: '<%= sshUser %>',
    sshPassword: '<%= sshPassword %>',
    sshPort: '<%= sshPort %>',
    publicFolders: <%- publicFolders %>
};


export default Config;
