import React from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import { globalStyles } from '../styles/global.js';
import { Formik } from 'formik';
import * as yup from 'yup';
import FlatButton from '../shared/button';

//validation with yup
const reviewSchema = yup.object({
    title: yup.string()
    .required()
    .min(4),

    body: yup.string()
    .required()
    .min(8),

    rating: yup.string()
    .test('is-num-1-5', 'Rating must be a number 1 - 5', (val) => {
        return parseInt(val) < 6 && parseInt(val) > 0;
    }),

    // email: yup.string()
    // .test('email-validation', 'Enter a valid email', (val) => {
    //   return  (/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val));
    // })

})


export default function ReviewForm({addReview}) {

    return (
        <View style={globalStyles.container}>
            <Formik
                initialValues={{ title: '', body: '', rating: '', email: '' }}
                //validation with yup
                validationSchema={reviewSchema}
                onSubmit={(values, actions) => {
                    addReview(values);
                    actions.resetForm();
                }}
            >
                {(formikProps) => (
                    <View>
                        <TextInput
                            style={globalStyles.input}
                            placeholder='Review title'
                            onChangeText={formikProps.handleChange('title')}
                            value={formikProps.values.title}
                            onBlur={formikProps.handleBlur('title')}
                        />
                        <Text style={globalStyles.errorText}>{ formikProps.touched.title && formikProps.errors.title }</Text>

                        <TextInput
                            multiline minHeight={60}
                            style={globalStyles.input}
                            placeholder='Review body'
                            onChangeText={formikProps.handleChange('body')}
                            value={formikProps.values.body}
                            onBlur={formikProps.handleBlur('body')}
                        />
                        <Text style={globalStyles.errorText}>{ formikProps.touched.body && formikProps.errors.body }</Text>

                        <TextInput
                            style={globalStyles.input}
                            placeholder='Rating (1-5)'
                            onChangeText={formikProps.handleChange('rating')}
                            value={formikProps.values.rating}
                            keyboardType='numeric'
                            onBlur={formikProps.handleBlur('rating')}
                        />
                        <Text style={globalStyles.errorText}>{ formikProps.touched.rating && formikProps.errors.rating }</Text>

                        {/* <TextInput
                            style={globalStyles.input}
                            placeholder='Youremail@domain.com'
                            onChangeText={formikProps.handleChange('email')}
                            value={formikProps.values.email}
                            keyboardType='email-address'
                            onBlur={formikProps.handleBlur('email')}
                        />
                        <Text style={globalStyles.errorText}>{ formikProps.touched.email && formikProps.errors.email }</Text> */}

                        <FlatButton text='submit' onPress={formikProps.handleSubmit} />
                    </View>
                )}
            </Formik>
        </View>
    )
}

