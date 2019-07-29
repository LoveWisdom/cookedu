enum REGISTER{
    ADDRESS = 0x29,
    COMMITBIT = 0x80,
    ENABLE = 0x00,
    ENABLE_AIEN = 0x10,
    ENABLE_WEN = 0x08,
    ENABLE_AEN = 0x02, 
    ENABLE_PON = 0x01,
    ATIME = 0x01,
    WTIME = 0x03,
    WTIME_2_4MS = 0xFF,
    WTIME_204MS = 0xAB,
    WTIME_614MS = 0x00,
    AILTL = 0x04,
    AILTH = 0x05,
    AIHTL = 0x06,
    AIHTH = 0x07,
    PERS = 0x0C,
    CONFIG = 0x0D,
    
    IOA = 0x00,
    IOB = 0x01,
}
enum PIN{
    R = 0,
    G = 1,
    B = 2
    
}
//% weight=5 color=#0000FF icon="\uf26e"
namespace 库壳基础包{
    const TCS34725_ADDRESS          =0x29
    const TCS34725_COMMAND_BIT      =0x80
    const TCS34725_ENABLE           =0x00
    const TCS34725_ENABLE_AIEN      =0x10    /* RGBC Interrupt Enable */
    const TCS34725_ENABLE_WEN       =0x08    /* Wait enable - Writing 1 activates the wait timer */
    const TCS34725_ENABLE_AEN       =0x02    /* RGBC Enable - Writing 1 actives the ADC, 0 disables it */
    const TCS34725_ENABLE_PON       =0x01    /* Power on - Writing 1 activates the internal oscillator, 0 disables it */
    const TCS34725_ATIME            =0x01    /* Integration time */
    const TCS34725_WTIME            =0x03    /* Wait time =if TCS34725_ENABLE_WEN is asserted */
    const TCS34725_WTIME_2_4MS      =0xFF    /* WLONG0 = 2.4ms   WLONG1 = 0.029s */
    const TCS34725_WTIME_204MS      =0xAB    /* WLONG0 = 204ms   WLONG1 = 2.45s  */
    const TCS34725_WTIME_614MS      =0x00    /* WLONG0 = 614ms   WLONG1 = 7.4s   */
    const TCS34725_AILTL            =0x04    /* Clear channel lower interrupt threshold */
    const TCS34725_AILTH            =0x05
    const TCS34725_AIHTL            =0x06    /* Clear channel upper interrupt threshold */
    const TCS34725_AIHTH            =0x07
    const TCS34725_PERS             =0x0C    /* Persistence register - basic SW filtering mechanism for interrupts */
    const TCS34725_PERS_NONE        =0b0000  /* Every RGBC cycle generates an interrupt                                */
    const TCS34725_PERS_1_CYCLE     =0b0001  /* 1 clean channel value outside threshold range generates an interrupt   */
    const TCS34725_PERS_2_CYCLE     =0b0010  /* 2 clean channel values outside threshold range generates an interrupt  */
    const TCS34725_PERS_3_CYCLE     =0b0011  /* 3 clean channel values outside threshold range generates an interrupt  */
    const TCS34725_PERS_5_CYCLE     =0b0100  /* 5 clean channel values outside threshold range generates an interrupt  */
    const TCS34725_PERS_10_CYCLE    =0b0101  /* 10 clean channel values outside threshold range generates an interrupt */
    const TCS34725_PERS_15_CYCLE    =0b0110  /* 15 clean channel values outside threshold range generates an interrupt */
    const TCS34725_PERS_20_CYCLE    =0b0111  /* 20 clean channel values outside threshold range generates an interrupt */
    const TCS34725_PERS_25_CYCLE    =0b1000  /* 25 clean channel values outside threshold range generates an interrupt */
    const TCS34725_PERS_30_CYCLE    =0b1001  /* 30 clean channel values outside threshold range generates an interrupt */
    const TCS34725_PERS_35_CYCLE    =0b1010  /* 35 clean channel values outside threshold range generates an interrupt */
    const TCS34725_PERS_40_CYCLE    =0b1011  /* 40 clean channel values outside threshold range generates an interrupt */
    const TCS34725_PERS_45_CYCLE    =0b1100  /* 45 clean channel values outside threshold range generates an interrupt */
    const TCS34725_PERS_50_CYCLE    =0b1101  /* 50 clean channel values outside threshold range generates an interrupt */
    const TCS34725_PERS_55_CYCLE    =0b1110  /* 55 clean channel values outside threshold range generates an interrupt */
    const TCS34725_PERS_60_CYCLE    =0b1111  /* 60 clean channel values outside threshold range generates an interrupt */
    const TCS34725_CONFIG           =0x0D
    const TCS34725_CONFIG_WLONG     =0x02    /* Choose between short and long =12x wait times via TCS34725_WTIME */
    const TCS34725_CONTROL          =0x0F    /* Set the gain level for the sensor */
    const TCS34725_ID               =0x12    /* 0x44 = TCS34721/TCS34725, 0x4D = TCS34723/TCS34727 */
    const TCS34725_STATUS           =0x13
    const TCS34725_STATUS_AINT      =0x10    /* RGBC Clean channel interrupt */
    const TCS34725_STATUS_AVALID    =0x01    /* Indicates that the RGBC channels have completed an integration cycle */
    const TCS34725_CDATAL           =0x14    /* Clear channel data */
    const TCS34725_CDATAH           =0x15
    const TCS34725_RDATAL           =0x16    /* Red channel data */
    const TCS34725_RDATAH           =0x17
    const TCS34725_GDATAL           =0x18    /* Green channel data */
    const TCS34725_GDATAH           =0x19
    const TCS34725_BDATAL           =0x1A    /* Blue channel data */
    const TCS34725_BDATAH           =0x1B

    const TCS34725_INTEGRATIONTIME_2_4MS   =0xFF   /**<  2.4ms - 1 cycle    - Max Count: 1024  */
    const TCS34725_INTEGRATIONTIME_24MS    =0xF6   /**<  24ms  - 10 cycles  - Max Count: 10240 */
    const TCS34725_INTEGRATIONTIME_50MS    =0xEB   /**<  50ms  - 20 cycles  - Max Count: 20480 */
    const TCS34725_INTEGRATIONTIME_101MS   =0xD5   /**<  101ms - 42 cycles  - Max Count: 43008 */
    const TCS34725_INTEGRATIONTIME_154MS   =0xC0   /**<  154ms - 64 cycles  - Max Count: 65535 */
    const TCS34725_INTEGRATIONTIME_240MS   =0x9C   /**<  240ms - 100 cycles - Max Count: 65535 */
    const TCS34725_INTEGRATIONTIME_700MS   =0x00   /**<  700ms - 256 cycles - Max Count: 65535 */

    const TCS34725_GAIN_1X                 =0x00   /**<  No gain  */
    const TCS34725_GAIN_4X                 =0x01   /**<  4x gain  */
    const TCS34725_GAIN_16X                =0x02   /**<  16x gain */
    const TCS34725_GAIN_60X                =0x03   /**<  60x gain */
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

    // /**
    //  * Read data from the register
    //  * @param reg [0-21] register of cookedu; eg:0,15,23
    //  */
    // //% blockId=ReadReg block="读取引脚 |%reg| 数据"
    // //% weight=65 icon="\uf13d"
    // export function ReadReg(reg: REGISTER): number{
    //     let val = read(cookedu_address, reg);
    //     return val;
    // }

    // /**
    //  * write data to pinA or pinB
    //  * @param pin [0-1] choose PinA or PinB; eg: 0, 1
    //  * @param value [0-255] pulse of servo; eg: 128, 0, 255
    //  */
    // //% blockId=WritePin block="引脚 P |%pin| 输出值 |%value|"
    // //% weight=75 icon="\uf642"
    // //% value.min=0 value.max=255
    // export function WritePin(pin: PIN, value: number): void {
    //     if (!initialized) {
    //         initcookedu();
    //     }
    //     if (pin == 0) {
    //         write(cookedu_address, cookedu_GPIOA, value);
    //     }
    //     else {
    //         write(cookedu_address, cookedu_GPIOB, value);
    //     }
    // } 
    
    /**
     * ReadData From PinA or PinB
     * @param pin [0-2] choose PinA or PinB; eg: 0, 1
     */
    //% blockId=ReadPin block="环境光颜色 |%pin|"
    //% weight=85 icon="\uf77c"
    export function ReadPin(pin: PIN): number{
        if (!initialized) {
            initcookedu();
        }
        if (pin == 0) {
            let val = read(cookedu_address, TCS34725_RDATAL);
            return val;
        }
        else if (pin == 1){
            let val = read(cookedu_address, TCS34725_GDATAL);
            return val;
        }
        else {
            let val = read(cookedu_address, TCS34725_BDATAL);
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
    //% blockId=motor block="开启电机 |%pin| 转速 |%value|"
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
    /**
     * button
     * @param pin [0-20]
     */
    //% blockId=button block="外接按钮 |%pin| 被按下"
    //% weight=190
    export function button(pin: DigitalPin): boolean{
        let val = pins.digitalReadPin(pin);
        if (val == 0) {
            return false;
        }
        else {
            return true;
        }
    }
    /**
     * limit switch
     * @param pin [0-20]
     */
    //% blockId=limitswitch block="限位开关 |%pin| 被按下"
    //% weight=205
    export function limitswitch(pin: DigitalPin): boolean{
        let val = pins.digitalReadPin(pin);
        if (val == 0) {
            return false;
        }
        else {
            return true;
        }
    }
    /**
     * horizontal
     * @param pin [0-20]
     */
    //% blockId=horizontal block="检测水平 |%pin|"
    //% weight=220
    export function horizontal(pin: DigitalPin): boolean{
        let val = pins.digitalReadPin(pin);
        if (val == 0) {
            return false;
        }
        else {
            return true;
        }
    }
    /**
     * brightness
     * @param pin [0-20]
     */
    //% blockId=brightness block="亮度 |%pin|"
    //% weight=235
    export function brightness(pin: AnalogPin): number{
        let value = pins.analogReadPin(pin);
        return value; 
    }
    /**
     * 
     */

}