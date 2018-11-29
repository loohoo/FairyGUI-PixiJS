namespace fgui {


    export type MixColor = number | number[];

    export interface IColorGear {
        color: MixColor;
    }

    export let isColorGear = function(obj:any): obj is IColorGear
    {
        return obj && "color" in obj;
    }
}