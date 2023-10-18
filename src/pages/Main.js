import { useContext, useState } from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import { HistoryContext } from "../context/History";

const Main = () => {
    const [display, setDisplay] = useState('');
    const { addCalculation } = useContext(HistoryContext);
    const hasNewCalculation = false; //todo

    const changeDisplay = (value) => {
        var lastOp = display[display.length - 1];
        if(opButtons.includes(value) && opButtons.includes(lastOp))
            return;

        var newDisplay = display + value;
        setDisplay(newDisplay);
    }

    const resetDisplay = () => {
        setDisplay('');
    }

    const calculate = () => {
        var result = eval(display).toString();
        addCalculation(display + " = " + result);
        setDisplay(result);
    }

    const opButtons = ['+', '-', '/', '*', '='];
    const buttons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

    const renderOpButtons = () => {
        return opButtons.map((op, i) => {
            if(op != '=')
                return (
                    <TouchableOpacity style={styles.opButtons} key={i} onPress={() => changeDisplay(op)}>
                        <Text style={{ fontSize: '2.5rem', fontWeight: '600', textAlign: 'center' }}>{op}</Text>
                    </TouchableOpacity>
                )
            else
                return (
                    <TouchableOpacity style={styles.opButtons} key={i} onPress={calculate}>
                        <Text style={{ fontSize: '2.5rem', fontWeight: '600', textAlign: 'center' }}>{op}</Text>
                    </TouchableOpacity>
                )
        })
    }

    const renderButtons = () => {
        return buttons.map((op, i) => {
            return (
                <TouchableOpacity style={[styles.opButtons, {width: 80, height: 80}]} key={i} onPress={() => changeDisplay(op)}>
                    <Text style={{ fontSize: '2.5rem', fontWeight: '600', textAlign: 'center' }}>{op}</Text>
                </TouchableOpacity>
            )
        })
    }

    return (
        <View style={styles.container}>
            <View style={styles.calcBox}>
                <View style={styles.topVisor}>
                    <View style={styles.visor}>
                        {display}
                    </View>
                    <View style={styles.operatorButtons}>
                        {renderOpButtons()}
                    </View>
                </View>
                <View style={styles.buttons}>
                    {renderButtons()}
                </View>
                <View style={styles.btnContainer}>
                    <TouchableOpacity style={[styles.btn, {backgroundColor: '#FF4425'}]} onPress={resetDisplay}>
                        <Text style={{ fontSize: '1.5rem', fontWeight: '600', textAlign: 'center', color: '#fff' }}>Limpar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.btn, {backgroundColor: '#7FFB46'}]}>
                        <Text style={{ fontSize: '1.5rem', fontWeight: '600', textAlign: 'center' }}>Histórico</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#eee',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100vw',
        height: '100vh'
    },
    calcBox: {
        width: '90%',
        height: '90%',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: 24,
        shadowColor: '#333',
        shadowOffset: { width: 1, height: 5 },
        shadowRadius: 10,
        shadowOpacity: 0.5,
        paddingVertical: 24,
        paddingHorizontal: 12,
    },
    topVisor: {
        width: '95%',
        height: '30%',
        justifyContent: 'space-between'
    },
    visor: {
        width: '100%',
        height: '50%',
        backgroundColor: '#eee',
        borderRadius: 12,
        padding: 24,
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '2.5rem',
        fontWeight: '700',
        letterSpacing: '5px',
    },
    operatorButtons: {
        gap: 10,
        width: '100%',
        height: '50%',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'
    },
    opButtons: {
        backgroundColor: '#eee',
        width: 70,
        height: 70,
        borderRadius: 99,
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center'
    },
    buttons: {
        width: '90%',
        height: '60%',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center',
        rowGap: 1,
        columnGap: 30
    },
    btnContainer: {
        flexDirection: 'row',
        width: '100%',
        height: 'auto',
        gap: 12,
        justifyContent: 'center',
        alignItems:'center',
        marginTop: 15
    },
    btn: {
        width: '40%',
        borderRadius: 12,
        backgroundColor: '#222',
        paddingHorizontal: 6,
        paddingVertical: 9
    }
});

export default Main;