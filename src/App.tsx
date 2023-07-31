import './App.css'
import WhatsAppLogo from './assets/WhatsAppButtonWhiteLarge.svg'
import {
  FluentProvider,
  webLightTheme,
  Button,
  Input,
  Label,
  Textarea,
  Image
} from "@fluentui/react-components";

export default function App() {
  return (
    <FluentProvider theme={webLightTheme}>
      <div className='content'>
        <Image src={WhatsAppLogo} alt='WhatsApp logo'></Image>
        <Label>https://wa.me/</Label>
        <Input type='tel' placeholder='1XXXXXXXXXX'></Input>
        <Textarea placeholder='message'></Textarea>
        <Button appearance="primary">Chat</Button>
      </div>
    </FluentProvider>
  );
}
