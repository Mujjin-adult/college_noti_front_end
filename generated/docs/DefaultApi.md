# DefaultApi

All URIs are relative to *http://localhost:8080*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**changePassword**](#changepassword) | **PUT** /api/users/password | 비밀번호 변경|
|[**createBookmark**](#createbookmark) | **POST** /api/bookmarks | 북마크 생성|
|[**deleteAccount**](#deleteaccount) | **DELETE** /api/users/me | 회원 탈퇴|
|[**deleteAllRecentSearches**](#deleteallrecentsearches) | **DELETE** /api/search/recent | 모든 최근 검색어 삭제|
|[**deleteBookmark**](#deletebookmark) | **DELETE** /api/bookmarks/{id} | 북마크 삭제|
|[**deleteRecentSearch**](#deleterecentsearch) | **DELETE** /api/search/recent/{id} | 최근 검색어 삭제|
|[**findId**](#findid) | **POST** /api/auth/find-id | 아이디 찾기|
|[**forgotPassword**](#forgotpassword) | **POST** /api/auth/forgot-password | 비밀번호 찾기|
|[**getActiveCategories**](#getactivecategories) | **GET** /api/categories/active | 활성 카테고리 목록 조회|
|[**getActivePreferences**](#getactivepreferences) | **GET** /api/preferences/categories/active | 활성 구독 조회|
|[**getAllCategories**](#getallcategories) | **GET** /api/categories | 전체 카테고리 목록 조회|
|[**getAllNotices**](#getallnotices) | **GET** /api/notices | 전체 공지사항 목록 조회|
|[**getBookmark**](#getbookmark) | **GET** /api/bookmarks/{id} | 북마크 상세 조회|
|[**getBookmarkCount**](#getbookmarkcount) | **GET** /api/bookmarks/count | 북마크 개수 조회|
|[**getCategoryByCode**](#getcategorybycode) | **GET** /api/categories/{code} | 특정 카테고리 조회|
|[**getMyBookmarks**](#getmybookmarks) | **GET** /api/bookmarks | 북마크 목록 조회|
|[**getMyInfo**](#getmyinfo) | **GET** /api/users/me | 내 정보 조회|
|[**getMyPreferences**](#getmypreferences) | **GET** /api/preferences/categories | 구독 카테고리 조회|
|[**getNoticeById**](#getnoticebyid) | **GET** /api/notices/{id} | 공지사항 상세 조회|
|[**getNoticesByCategory**](#getnoticesbycategory) | **GET** /api/notices/category/{categoryCode} | 카테고리별 공지사항 조회|
|[**getRecentSearches**](#getrecentsearches) | **GET** /api/search/recent | 최근 검색어 조회|
|[**getSubscribedNotices**](#getsubscribednotices) | **GET** /api/notices/subscribed | 구독 공지사항 조회|
|[**isBookmarked**](#isbookmarked) | **GET** /api/bookmarks/check/{noticeId} | 북마크 여부 확인|
|[**isSubscribed**](#issubscribed) | **GET** /api/preferences/categories/{categoryId}/subscribed | 구독 여부 확인|
|[**login**](#login) | **POST** /api/auth/login | 로그인|
|[**logout**](#logout) | **POST** /api/auth/logout | 로그아웃|
|[**refreshToken**](#refreshtoken) | **POST** /api/auth/refresh | 토큰 갱신|
|[**resendVerificationEmail**](#resendverificationemail) | **POST** /api/auth/resend-verification | 인증 메일 재발송|
|[**resetPassword**](#resetpassword) | **POST** /api/auth/reset-password | 비밀번호 재설정|
|[**saveRecentSearch**](#saverecentsearch) | **POST** /api/search/recent | 최근 검색어 저장|
|[**searchNotices**](#searchnotices) | **GET** /api/notices/search | 공지사항 검색|
|[**signUp**](#signup) | **POST** /api/auth/signup | 회원가입|
|[**subscribeCategory**](#subscribecategory) | **POST** /api/preferences/categories | 카테고리 구독|
|[**unsubscribeCategory**](#unsubscribecategory) | **DELETE** /api/preferences/categories/{categoryId} | 구독 취소|
|[**updateBookmarkMemo**](#updatebookmarkmemo) | **PUT** /api/bookmarks/{id}/memo | 북마크 메모 수정|
|[**updateFcmToken**](#updatefcmtoken) | **PUT** /api/users/fcm-token | FCM 토큰 업데이트|
|[**updateNotification**](#updatenotification) | **PUT** /api/preferences/categories/{categoryId}/notification | 알림 설정 변경|
|[**updateProfile**](#updateprofile) | **PUT** /api/users/me | 프로필 수정|
|[**updateSettings**](#updatesettings) | **PUT** /api/users/settings | 사용자 설정 수정|
|[**verifyEmail**](#verifyemail) | **GET** /api/auth/verify-email | 이메일 인증|

# **changePassword**
> ApiResponseVoid changePassword(changePasswordRequest)

현재 비밀번호 확인 후 새로운 비밀번호로 변경합니다.

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    ChangePasswordRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let changePasswordRequest: ChangePasswordRequest; //

const { status, data } = await apiInstance.changePassword(
    changePasswordRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **changePasswordRequest** | **ChangePasswordRequest**|  | |


### Return type

**ApiResponseVoid**

### Authorization

[Bearer Authentication](../README.md#Bearer Authentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **createBookmark**
> ApiResponseResponse createBookmark(createRequest)

공지사항을 북마크에 저장합니다. 선택적으로 메모를 추가할 수 있습니다.

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    CreateRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let createRequest: CreateRequest; //

const { status, data } = await apiInstance.createBookmark(
    createRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createRequest** | **CreateRequest**|  | |


### Return type

**ApiResponseResponse**

### Authorization

[Bearer Authentication](../README.md#Bearer Authentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deleteAccount**
> ApiResponseVoid deleteAccount(deleteAccountRequest)

회원 탈퇴를 처리합니다. 모든 사용자 데이터가 삭제됩니다.

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    DeleteAccountRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let deleteAccountRequest: DeleteAccountRequest; //

const { status, data } = await apiInstance.deleteAccount(
    deleteAccountRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **deleteAccountRequest** | **DeleteAccountRequest**|  | |


### Return type

**ApiResponseVoid**

### Authorization

[Bearer Authentication](../README.md#Bearer Authentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deleteAllRecentSearches**
> ApiResponseString deleteAllRecentSearches()

사용자의 모든 최근 검색어를 삭제합니다.

### Example

```typescript
import {
    DefaultApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

const { status, data } = await apiInstance.deleteAllRecentSearches();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**ApiResponseString**

### Authorization

[Bearer Authentication](../README.md#Bearer Authentication)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deleteBookmark**
> ApiResponseVoid deleteBookmark()

저장한 북마크를 삭제합니다.

### Example

```typescript
import {
    DefaultApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let id: number; // (default to undefined)

const { status, data } = await apiInstance.deleteBookmark(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**number**] |  | defaults to undefined|


### Return type

**ApiResponseVoid**

### Authorization

[Bearer Authentication](../README.md#Bearer Authentication)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deleteRecentSearch**
> ApiResponseString deleteRecentSearch()

특정 최근 검색어를 삭제합니다.

### Example

```typescript
import {
    DefaultApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let id: number; // (default to undefined)

const { status, data } = await apiInstance.deleteRecentSearch(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**number**] |  | defaults to undefined|


### Return type

**ApiResponseString**

### Authorization

[Bearer Authentication](../README.md#Bearer Authentication)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **findId**
> ApiResponseFindIdResponse findId(findIdRequest)

이름과 학번으로 아이디(이메일)를 찾습니다. 마스킹된 이메일과 함께 전체 이메일이 발송됩니다.

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    FindIdRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let findIdRequest: FindIdRequest; //

const { status, data } = await apiInstance.findId(
    findIdRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **findIdRequest** | **FindIdRequest**|  | |


### Return type

**ApiResponseFindIdResponse**

### Authorization

[Bearer Authentication](../README.md#Bearer Authentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **forgotPassword**
> ApiResponseVoid forgotPassword(forgotPasswordRequest)

비밀번호 재설정 링크를 이메일로 발송합니다.

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    ForgotPasswordRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let forgotPasswordRequest: ForgotPasswordRequest; //

const { status, data } = await apiInstance.forgotPassword(
    forgotPasswordRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **forgotPasswordRequest** | **ForgotPasswordRequest**|  | |


### Return type

**ApiResponseVoid**

### Authorization

[Bearer Authentication](../README.md#Bearer Authentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getActiveCategories**
> ApiResponseListResponse getActiveCategories()

활성 상태인 카테고리만 조회합니다.

### Example

```typescript
import {
    DefaultApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

const { status, data } = await apiInstance.getActiveCategories();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**ApiResponseListResponse**

### Authorization

[Bearer Authentication](../README.md#Bearer Authentication)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getActivePreferences**
> ApiResponseListResponse getActivePreferences()

알림이 활성화된 구독 카테고리만 조회합니다.

### Example

```typescript
import {
    DefaultApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

const { status, data } = await apiInstance.getActivePreferences();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**ApiResponseListResponse**

### Authorization

[Bearer Authentication](../README.md#Bearer Authentication)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getAllCategories**
> ApiResponseListResponse getAllCategories()

모든 카테고리의 목록을 조회합니다. 각 카테고리의 공지사항 개수도 함께 반환됩니다.

### Example

```typescript
import {
    DefaultApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

const { status, data } = await apiInstance.getAllCategories();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**ApiResponseListResponse**

### Authorization

[Bearer Authentication](../README.md#Bearer Authentication)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getAllNotices**
> ApiResponsePageResponse getAllNotices()

모든 공지사항을 페이징하여 조회합니다. 정렬 방식을 선택할 수 있습니다.

### Example

```typescript
import {
    DefaultApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let page: number; //페이지 번호 (0부터 시작) (optional) (default to 0)
let size: number; //페이지당 항목 수 (optional) (default to 20)
let sort: string; //정렬 방식 (latest: 최신순, viewCount: 조회순) (optional) (default to 'latest')

const { status, data } = await apiInstance.getAllNotices(
    page,
    size,
    sort
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **page** | [**number**] | 페이지 번호 (0부터 시작) | (optional) defaults to 0|
| **size** | [**number**] | 페이지당 항목 수 | (optional) defaults to 20|
| **sort** | [**string**] | 정렬 방식 (latest: 최신순, viewCount: 조회순) | (optional) defaults to 'latest'|


### Return type

**ApiResponsePageResponse**

### Authorization

[Bearer Authentication](../README.md#Bearer Authentication)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getBookmark**
> ApiResponseResponse getBookmark()

특정 북마크의 상세 정보를 조회합니다.

### Example

```typescript
import {
    DefaultApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let id: number; // (default to undefined)

const { status, data } = await apiInstance.getBookmark(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**number**] |  | defaults to undefined|


### Return type

**ApiResponseResponse**

### Authorization

[Bearer Authentication](../README.md#Bearer Authentication)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getBookmarkCount**
> ApiResponseLong getBookmarkCount()

내가 저장한 북마크의 총 개수를 조회합니다.

### Example

```typescript
import {
    DefaultApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

const { status, data } = await apiInstance.getBookmarkCount();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**ApiResponseLong**

### Authorization

[Bearer Authentication](../README.md#Bearer Authentication)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getCategoryByCode**
> ApiResponseResponse getCategoryByCode()

카테고리 코드로 특정 카테고리 정보를 조회합니다.

### Example

```typescript
import {
    DefaultApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let code: string; // (default to undefined)

const { status, data } = await apiInstance.getCategoryByCode(
    code
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **code** | [**string**] |  | defaults to undefined|


### Return type

**ApiResponseResponse**

### Authorization

[Bearer Authentication](../README.md#Bearer Authentication)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getMyBookmarks**
> ApiResponsePageResponse getMyBookmarks()

내가 저장한 북마크 목록을 페이징하여 조회합니다.

### Example

```typescript
import {
    DefaultApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let page: number; // (optional) (default to 0)
let size: number; // (optional) (default to 20)

const { status, data } = await apiInstance.getMyBookmarks(
    page,
    size
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **page** | [**number**] |  | (optional) defaults to 0|
| **size** | [**number**] |  | (optional) defaults to 20|


### Return type

**ApiResponsePageResponse**

### Authorization

[Bearer Authentication](../README.md#Bearer Authentication)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getMyInfo**
> ApiResponseResponse getMyInfo()

현재 로그인한 사용자의 정보를 조회합니다.

### Example

```typescript
import {
    DefaultApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

const { status, data } = await apiInstance.getMyInfo();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**ApiResponseResponse**

### Authorization

[Bearer Authentication](../README.md#Bearer Authentication)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getMyPreferences**
> ApiResponseListResponse getMyPreferences()

내가 구독한 모든 카테고리 목록을 조회합니다.

### Example

```typescript
import {
    DefaultApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

const { status, data } = await apiInstance.getMyPreferences();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**ApiResponseListResponse**

### Authorization

[Bearer Authentication](../README.md#Bearer Authentication)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getNoticeById**
> ApiResponseDetailResponse getNoticeById()

ID로 특정 공지사항의 상세 정보를 조회합니다.

### Example

```typescript
import {
    DefaultApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let id: number; //공지사항 ID (default to undefined)

const { status, data } = await apiInstance.getNoticeById(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**number**] | 공지사항 ID | defaults to undefined|


### Return type

**ApiResponseDetailResponse**

### Authorization

[Bearer Authentication](../README.md#Bearer Authentication)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getNoticesByCategory**
> ApiResponsePageResponse getNoticesByCategory()

특정 카테고리의 공지사항 목록을 조회합니다. 정렬 방식을 선택할 수 있습니다.

### Example

```typescript
import {
    DefaultApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let categoryCode: string; //카테고리 코드 (default to undefined)
let page: number; //페이지 번호 (optional) (default to 0)
let size: number; //페이지당 항목 수 (optional) (default to 20)
let sort: string; //정렬 방식 (latest: 최신순, viewCount: 조회순) (optional) (default to 'latest')

const { status, data } = await apiInstance.getNoticesByCategory(
    categoryCode,
    page,
    size,
    sort
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **categoryCode** | [**string**] | 카테고리 코드 | defaults to undefined|
| **page** | [**number**] | 페이지 번호 | (optional) defaults to 0|
| **size** | [**number**] | 페이지당 항목 수 | (optional) defaults to 20|
| **sort** | [**string**] | 정렬 방식 (latest: 최신순, viewCount: 조회순) | (optional) defaults to 'latest'|


### Return type

**ApiResponsePageResponse**

### Authorization

[Bearer Authentication](../README.md#Bearer Authentication)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getRecentSearches**
> ApiResponseListResponse getRecentSearches()

사용자의 최근 검색어 목록을 조회합니다. 최대 5개, 최신순으로 반환됩니다.

### Example

```typescript
import {
    DefaultApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

const { status, data } = await apiInstance.getRecentSearches();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**ApiResponseListResponse**

### Authorization

[Bearer Authentication](../README.md#Bearer Authentication)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getSubscribedNotices**
> ApiResponsePageResponse getSubscribedNotices()

사용자가 구독한 카테고리의 공지사항만 조회합니다. 정렬 방식을 선택할 수 있습니다.

### Example

```typescript
import {
    DefaultApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let page: number; //페이지 번호 (optional) (default to 0)
let size: number; //페이지당 항목 수 (optional) (default to 20)
let sort: string; //정렬 방식 (latest: 최신순, viewCount: 조회순) (optional) (default to 'latest')

const { status, data } = await apiInstance.getSubscribedNotices(
    page,
    size,
    sort
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **page** | [**number**] | 페이지 번호 | (optional) defaults to 0|
| **size** | [**number**] | 페이지당 항목 수 | (optional) defaults to 20|
| **sort** | [**string**] | 정렬 방식 (latest: 최신순, viewCount: 조회순) | (optional) defaults to 'latest'|


### Return type

**ApiResponsePageResponse**

### Authorization

[Bearer Authentication](../README.md#Bearer Authentication)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **isBookmarked**
> ApiResponseBoolean isBookmarked()

특정 공지사항이 북마크되어 있는지 확인합니다.

### Example

```typescript
import {
    DefaultApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let noticeId: number; // (default to undefined)

const { status, data } = await apiInstance.isBookmarked(
    noticeId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **noticeId** | [**number**] |  | defaults to undefined|


### Return type

**ApiResponseBoolean**

### Authorization

[Bearer Authentication](../README.md#Bearer Authentication)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **isSubscribed**
> ApiResponseBoolean isSubscribed()

특정 카테고리를 구독하고 있는지 확인합니다.

### Example

```typescript
import {
    DefaultApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let categoryId: number; // (default to undefined)

const { status, data } = await apiInstance.isSubscribed(
    categoryId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **categoryId** | [**number**] |  | defaults to undefined|


### Return type

**ApiResponseBoolean**

### Authorization

[Bearer Authentication](../README.md#Bearer Authentication)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **login**
> ApiResponseLoginResponse login(loginRequest)

이메일과 비밀번호로 로그인하여 JWT 토큰을 발급받습니다.

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    LoginRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let loginRequest: LoginRequest; //

const { status, data } = await apiInstance.login(
    loginRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **loginRequest** | **LoginRequest**|  | |


### Return type

**ApiResponseLoginResponse**

### Authorization

[Bearer Authentication](../README.md#Bearer Authentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **logout**
> ApiResponseVoid logout()

로그아웃 처리를 합니다. 클라이언트에서 토큰을 삭제해야 합니다.

### Example

```typescript
import {
    DefaultApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

const { status, data } = await apiInstance.logout();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**ApiResponseVoid**

### Authorization

[Bearer Authentication](../README.md#Bearer Authentication)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **refreshToken**
> ApiResponseString refreshToken(refreshTokenRequest)

리프레시 토큰으로 새로운 액세스 토큰을 발급받습니다.

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    RefreshTokenRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let refreshTokenRequest: RefreshTokenRequest; //

const { status, data } = await apiInstance.refreshToken(
    refreshTokenRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **refreshTokenRequest** | **RefreshTokenRequest**|  | |


### Return type

**ApiResponseString**

### Authorization

[Bearer Authentication](../README.md#Bearer Authentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **resendVerificationEmail**
> ApiResponseVoid resendVerificationEmail()

이메일 인증 메일을 다시 발송합니다.

### Example

```typescript
import {
    DefaultApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let email: string; // (default to undefined)

const { status, data } = await apiInstance.resendVerificationEmail(
    email
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **email** | [**string**] |  | defaults to undefined|


### Return type

**ApiResponseVoid**

### Authorization

[Bearer Authentication](../README.md#Bearer Authentication)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **resetPassword**
> ApiResponseVoid resetPassword(resetPasswordRequest)

이메일로 받은 토큰으로 새로운 비밀번호를 설정합니다.

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    ResetPasswordRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let resetPasswordRequest: ResetPasswordRequest; //

const { status, data } = await apiInstance.resetPassword(
    resetPasswordRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **resetPasswordRequest** | **ResetPasswordRequest**|  | |


### Return type

**ApiResponseVoid**

### Authorization

[Bearer Authentication](../README.md#Bearer Authentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **saveRecentSearch**
> ApiResponseResponse saveRecentSearch(saveRequest)

검색한 키워드를 최근 검색어에 저장합니다. 최대 5개까지 저장되며, 중복 키워드는 검색 시각이 갱신됩니다.

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    SaveRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let saveRequest: SaveRequest; //

const { status, data } = await apiInstance.saveRecentSearch(
    saveRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **saveRequest** | **SaveRequest**|  | |


### Return type

**ApiResponseResponse**

### Authorization

[Bearer Authentication](../README.md#Bearer Authentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **searchNotices**
> ApiResponsePageResponse searchNotices()

제목 또는 내용에 키워드가 포함된 공지사항을 검색합니다.

### Example

```typescript
import {
    DefaultApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let keyword: string; //검색 키워드 (default to undefined)
let page: number; //페이지 번호 (optional) (default to 0)
let size: number; //페이지당 항목 수 (optional) (default to 20)

const { status, data } = await apiInstance.searchNotices(
    keyword,
    page,
    size
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **keyword** | [**string**] | 검색 키워드 | defaults to undefined|
| **page** | [**number**] | 페이지 번호 | (optional) defaults to 0|
| **size** | [**number**] | 페이지당 항목 수 | (optional) defaults to 20|


### Return type

**ApiResponsePageResponse**

### Authorization

[Bearer Authentication](../README.md#Bearer Authentication)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **signUp**
> ApiResponseUserResponse signUp(signUpRequest)

인천대학교 이메일로 회원가입을 진행합니다. 가입 후 이메일 인증이 필요합니다.

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    SignUpRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let signUpRequest: SignUpRequest; //

const { status, data } = await apiInstance.signUp(
    signUpRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **signUpRequest** | **SignUpRequest**|  | |


### Return type

**ApiResponseUserResponse**

### Authorization

[Bearer Authentication](../README.md#Bearer Authentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **subscribeCategory**
> ApiResponseResponse subscribeCategory(subscribeRequest)

특정 카테고리를 구독하여 해당 카테고리의 공지사항 알림을 받을 수 있습니다.

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    SubscribeRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let subscribeRequest: SubscribeRequest; //

const { status, data } = await apiInstance.subscribeCategory(
    subscribeRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **subscribeRequest** | **SubscribeRequest**|  | |


### Return type

**ApiResponseResponse**

### Authorization

[Bearer Authentication](../README.md#Bearer Authentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **unsubscribeCategory**
> ApiResponseVoid unsubscribeCategory()

카테고리 구독을 취소합니다.

### Example

```typescript
import {
    DefaultApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let categoryId: number; // (default to undefined)

const { status, data } = await apiInstance.unsubscribeCategory(
    categoryId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **categoryId** | [**number**] |  | defaults to undefined|


### Return type

**ApiResponseVoid**

### Authorization

[Bearer Authentication](../README.md#Bearer Authentication)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updateBookmarkMemo**
> ApiResponseResponse updateBookmarkMemo(updateRequest)

저장한 북마크의 메모를 수정합니다.

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    UpdateRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let id: number; // (default to undefined)
let updateRequest: UpdateRequest; //

const { status, data } = await apiInstance.updateBookmarkMemo(
    id,
    updateRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updateRequest** | **UpdateRequest**|  | |
| **id** | [**number**] |  | defaults to undefined|


### Return type

**ApiResponseResponse**

### Authorization

[Bearer Authentication](../README.md#Bearer Authentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updateFcmToken**
> ApiResponseVoid updateFcmToken(updateFcmTokenRequest)

푸시 알림을 위한 FCM 토큰을 업데이트합니다.

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    UpdateFcmTokenRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let updateFcmTokenRequest: UpdateFcmTokenRequest; //

const { status, data } = await apiInstance.updateFcmToken(
    updateFcmTokenRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updateFcmTokenRequest** | **UpdateFcmTokenRequest**|  | |


### Return type

**ApiResponseVoid**

### Authorization

[Bearer Authentication](../README.md#Bearer Authentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updateNotification**
> ApiResponseResponse updateNotification(updateNotificationRequest)

구독한 카테고리의 알림을 활성화하거나 비활성화합니다.

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    UpdateNotificationRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let categoryId: number; // (default to undefined)
let updateNotificationRequest: UpdateNotificationRequest; //

const { status, data } = await apiInstance.updateNotification(
    categoryId,
    updateNotificationRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updateNotificationRequest** | **UpdateNotificationRequest**|  | |
| **categoryId** | [**number**] |  | defaults to undefined|


### Return type

**ApiResponseResponse**

### Authorization

[Bearer Authentication](../README.md#Bearer Authentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updateProfile**
> ApiResponseResponse updateProfile(updateProfileRequest)

사용자의 이름 등 프로필 정보를 수정합니다.

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    UpdateProfileRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let updateProfileRequest: UpdateProfileRequest; //

const { status, data } = await apiInstance.updateProfile(
    updateProfileRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updateProfileRequest** | **UpdateProfileRequest**|  | |


### Return type

**ApiResponseResponse**

### Authorization

[Bearer Authentication](../README.md#Bearer Authentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updateSettings**
> ApiResponseResponse updateSettings(updateSettingsRequest)

다크 모드, 시스템 알림 등 사용자 설정을 변경합니다.

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    UpdateSettingsRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let updateSettingsRequest: UpdateSettingsRequest; //

const { status, data } = await apiInstance.updateSettings(
    updateSettingsRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updateSettingsRequest** | **UpdateSettingsRequest**|  | |


### Return type

**ApiResponseResponse**

### Authorization

[Bearer Authentication](../README.md#Bearer Authentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **verifyEmail**
> ApiResponseVoid verifyEmail()

회원가입 시 발송된 이메일의 인증 링크로 이메일을 인증합니다.

### Example

```typescript
import {
    DefaultApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let token: string; // (default to undefined)

const { status, data } = await apiInstance.verifyEmail(
    token
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **token** | [**string**] |  | defaults to undefined|


### Return type

**ApiResponseVoid**

### Authorization

[Bearer Authentication](../README.md#Bearer Authentication)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

