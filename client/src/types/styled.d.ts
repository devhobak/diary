// import original module declarations
import "styled-components";

// and extend them!
declare module "styled-components" {
   export interface DefaultTheme {
      color: {
         backgroundColor: string;
         inputBoxColor: string;
         defaultFontColor: string;
         lightFontColor: string;
         headerBackgroundColor: string;
      };
      fontSize: {
         defaultSize: string;
      };
   }
}
