import './App.css'
import WhatsAppLogo from './assets/WhatsAppButtonWhiteLarge.svg'
import { FluentProvider, webLightTheme, Button, Input, Label, Image} from "@fluentui/react-components";

export default function App() {
      return (
          <FluentProvider theme={webLightTheme}>
            <Image src={WhatsAppLogo} alt='WhatsApp logo'></Image>
            <Label>https://wa.me/</Label>
            <Input placeholder='1XXXXXXXXXX'></Input>
              <Button appearance="primary"> Chat</Button>
          </FluentProvider>
      );
}
