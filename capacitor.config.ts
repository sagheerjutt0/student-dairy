import { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "student.dairy",
  appName: "student-dairy",
  webDir: "dist",
  server: {
    androidScheme: "https",
  },
};

export default config;
