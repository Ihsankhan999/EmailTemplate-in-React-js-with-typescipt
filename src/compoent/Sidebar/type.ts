export type Option = {
    label?: string;
    value: string;
    background?: string;
  };
  
 export  type DropDownProps = {
    options: Option[];
    tabwidth?: string;
    value?:Option;
    onChange: (value: Option) => void;
  };
  
 
