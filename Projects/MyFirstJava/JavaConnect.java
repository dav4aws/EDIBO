private static Connection getRemoteConnection() {

    String jdbcUrl = "jdbc:mysql://database-1.cxnurhwpmz0x.eu-central-1.rds.amazonaws.com:3000/db10?user=u10&password=111";
    Connection con = DriverManager.getConnection(jdbcUrl);
  }