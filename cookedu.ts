enum cook{
    IOA = 0x00,
    IOB = 0x01,
}
enum PIN{
    A = 0,
    B = 1
    
}
//% weight=5 color=#0000FF icon="\uf050"
namespace 库壳教育{
    const cookedu_address = 0x20
    const cookedu_IOA = 0x00
    const cookedu_IOB = 0xFF
    const cookedu_GPUP = 0x0D
    const cookedu_GPIOA = 0x12
    const cookedu_GPIOB = 0x13

    let initialized = false

    function write(addr: number, reg: number, value: number): void{
        let buf = pins.createBuffer(2);
        buf[0] = reg;
        buf[1] = value;
        pins.i2cWriteBuffer(addr, buf);
    }

    function read(addr: number, reg: number): number{
        pins.i2cWriteNumber(addr, reg, NumberFormat.UInt8BE);
        let val = pins.i2cReadNumber(addr, NumberFormat.UInt8BE);
        return val;
    }
    function initcookedu(): void{
        for (let regAddr = 0; regAddr < 22; regAddr++) {
            if (regAddr == 0 || regAddr == 1) {
                write(cookedu_address, regAddr, 0xFF);
            }
            else {
                write(cookedu_address, regAddr, 0x00);
            }
        }

        //configue all PinA output
        write(cookedu_address, cookedu_IOA, 0x00);

        //configue all PinB input
        write(cookedu_address, cookedu_IOB, 0xFF);

        //configue all PinB pullUP
        write(cookedu_address, cookedu_GPUP, 0xFF);
        initialized = true;
    }

    /**
     * Read data from the register
     * @param reg [0-21] register of cookedu; eg:0,15,23
     */
    //% blockId=ReadReg block="读取引脚 |%reg| 数据"
    //% weight=65 icon="\uf13d"
    export function ReadReg(reg: cook): number{
        let val = read(cookedu_address, reg);
        return val;
    }

    /**
     * write data to pinA or pinB
     * @param pin [0-1] choose PinA or PinB; eg: 0, 1
     * @param value [0-255] pulse of servo; eg: 128, 0, 255
     */
    //% blockId=WritePin block="引脚 P |%pin| 输出值 |%value|"
    //% weight=75 icon="\uf642"
    //% value.min=0 value.max=255
    export function WritePin(pin: PIN, value: number): void {
        if (!initialized) {
            initcookedu();
        }
        if (pin == 0) {
            write(cookedu_address, cookedu_GPIOA, value);
        }
        else {
            write(cookedu_address, cookedu_GPIOB, value);
        }
    } 
    
    /**
     * ReadData From PinA or PinB
     * @param pin [0-1] choose PinA or PinB; eg: 0, 1
     */
    //% blockId=ReadPin block="读取引脚状态 |%pin|"
    //% weight=85 icon="\uf77c"
    export function ReadPin(pin: PIN): number{
        if (!initialized) {
            initcookedu();
        }
        if (pin == 0) {
            let val = read(cookedu_address, cookedu_GPIOA);
            return val;
        }
        else {
            let val = read(cookedu_address, cookedu_GPIOB);
            return val;
        }
    }
    /**
     * take led light on
     * @param pin [0-20] 
     */
    //% blockId=ledon block="点亮led灯 |%pin|"
    //% weight=100
    export function light(pin: DigitalPin): void {
        let HIGH = 1;
        pins.digitalWritePin(pin,HIGH);
    }

    /**
     * take soil humidity
     * @param pin [0-4]
     */
    //% blockId=soil block="返回土壤湿度 |%pin|"
    //% weight=115
    export function readsoil(pin: AnalogPin): number{
        return pins.analogReadPin(pin);
    }

    /**
     * get touch
     * @param pin [0-20]
     */
    //% blockId=touch block="引脚检测到触摸 |%pin|"
    //% weight=130
    export function gettouch(pin: DigitalPin): boolean{
        let val = pins.digitalReadPin(pin);
        if (val == 0) {
            return false;
        }
        else {
            return true;
        }
    }
    /**
     * potentiometer
     * @param pin [0-20]
     */
    //% blockId=potentiometer block="电位器 |%pin| 电位"
    //% weight=145
    export function potentiometer(pin: AnalogPin): number{
        let value = pins.analogReadPin(pin);
        return value; 
    }
    /**
     * motor
     * @param pin [0-20]
     * @param value [0-255]
     */
    //% blockId=motor block="开启电机 |%pin| 转速"
    //% weight=160\
    export function motor(pin: AnalogPin,value: number): void{
        pins.analogWritePin(pin,value);
    }
    /**
     * humanbeing
     * @param pin [0-20]
     */
    //% blockId=humanbeing block="人体红外模块 |%pin|"
    //% weight=175
    export function humanbeing(pin: DigitalPin): boolean{
        let val = pins.digitalReadPin(pin);
        if (val == 0) {
            return false;
        }
        else {
            return true;
        }
    }
    
}