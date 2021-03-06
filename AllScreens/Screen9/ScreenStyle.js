import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { moderateScale } from "react-native-size-matters";
import { AppColor } from '../AppUtil'
import { fonts } from '../../components/utilities/images';


export  const styles = StyleSheet.create({
   
    arrow:{
        position: 'absolute',
        left: moderateScale(37),
        top: moderateScale(65),
    },
    sign: {
        position: 'absolute',
        left: moderateScale(70),
        top: moderateScale(60),
        fontStyle: 'normal',
        fontWeight: '500',
        fontSize: RFValue(18),
        lineHeight: 21,
        textAlign: 'right'
    },
    logo: {
        position: 'absolute',
       left: moderateScale(150),
        top: moderateScale(137),
    },
    email: {
        top: moderateScale(290),
        left: moderateScale(19),
        fontWeight:'400',
        fontSize: RFValue(12),
        color:AppColor.blackGrey,
        fontFamily: fonts.regular,

    },
    email1: {
        top: moderateScale(306),
        left:moderateScale(19),
        fontWeight:'500',
        fontSize: RFValue(14),
        lineHeight:16,
        color:AppColor.blackGrey,
        fontFamily: fonts.regular,

    },
    childView: {
        width: moderateScale(292),
        top: moderateScale(306),
        left: moderateScale(19),
        borderBottomWidth: 0.58,
        borderColor:AppColor.borderColor
    },
    password: {
        top: moderateScale(340),
        left: moderateScale(19),
        fontWeight:'400',
        fontSize: RFValue(12),
        lineHeight:14,
        color:AppColor.blackGrey,
        fontFamily: fonts.regular,

    },
    password1: {
        top: moderateScale(350),
        left: moderateScale(19),
        fontWeight:'500',
        fontSize: RFValue(14),
        lineHeight:16,
        color:AppColor.blackGrey,
        fontFamily: fonts.regular,

    },
    childView1: {
        width: moderateScale(292),
        top: moderateScale(355),
        left: moderateScale(19),
        borderBottomWidth: 0.58,
        borderColor:AppColor.borderColor
    },
    eyes:{
        position:'absolute',
        top: moderateScale(390),
        left: moderateScale(275),
        color:AppColor.violet
    },
    print: {
        top: moderateScale(473),
        left: moderateScale(43),
        position:'absolute',
    },
    continue: {
        position:'absolute',
        width: moderateScale(220),
        height: moderateScale(61),
        top:moderateScale(473),
        borderRadius:10,
        left: moderateScale(111),
        backgroundColor:AppColor.purple,
        
    },
    content: {
        paddingTop:20,
        color:AppColor.white,
        textAlign:'center',
        fontSize: RFValue(16),
        fontWeight:'500',
        fontFamily:fonts.regular
    },
    forgot: {
        top: moderateScale(490),
        textAlign:'center',
        fontWeight:'400',
        fontSize: RFValue(16),
        color:AppColor.purple,
        fontFamily:fonts.regular,


    },
    child: {
        width: moderateScale(135),
        height:moderateScale(5),
        top: moderateScale(585),
        left: moderateScale(120),
        borderRadius:100,
        position:'absolute',
        backgroundColor:AppColor.background,
        opacity:30
    },
    errorMessage: {
        position:'absolute',
        top:moderateScale(345),
        left:moderateScale(40),
        color:AppColor.red
    },
    errorMessage1: {
        position:'absolute',
        top:moderateScale(435),
        left:moderateScale(40),
        color:AppColor.red
    }

});