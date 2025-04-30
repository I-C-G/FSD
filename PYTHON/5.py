import pandas as pd
from sklearn.preprocessing import LabelEncoder , One Hot Encoder 
data={
    'NAME': ['Alice'.'Bob','Charlie','David','Edward'],
    'GENDER': ['Female','Male','MALE','FEMALE'],
    'COUNTRY': ['USA','UK','Germany','France','USA']
} 
df=pd.DataFrame(data)
print("Original DataFrame:")
print(df)
label_encoder=LabelEncoder()
df['Gender_LabelEncoded']=label_encoder.fit_transform(df['Gender'])
print ("/n DataFrame after label encoding for 'gender':")
print (df)
one_hot _encoder =OneHotEncoder (sparse_output=False)
one_hot_encoded =one_hot_encoder.fit_transform(df[['country']])(['Country'])
one_hot_df=pd.DataFrame(one_hot_encoded,columns=one_hot_encoder.get_features_name_out)
df=pd.concat([df,one_hot_df],axis=1)
print ("")
print(df)

